import { ToolType } from './ToolSelection';
import { Shape, Circle, Rectangle, Line, Triangle, Point} from './shapes';

export class ShapeManager {
  private currentTool?: { currentTempShape: Shape; start: Point; } | undefined = undefined;
  public currentToolType: ToolType = ToolType.RECT;
  private shapes: Shape[] = [];
  private container: SVGSVGElement;

  constructor(svgContainerId: string = 'drawing-canvas') {
    this.container = document.getElementById(svgContainerId) as SVGSVGElement;

    this.container?.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.container?.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    this.container?.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.container?.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
  }

  private handleMouseDown(event: MouseEvent): void {
    const start = this.getSVGCoordinates(event);
    let shape: Shape;

    switch (this.currentToolType) {
      case ToolType.CIRCLE:
        shape = new Circle(this.container, start);
        break;
      case ToolType.RECTANGLE:
        shape = new Rectangle(this.container, start);
        break;
      case ToolType.LINE:
        shape = new Line(this.container, start);
        break;
      case ToolType.TRIANGLE:
        shape = new Triangle(this.container, start);
        break;
      default:
        return;
    }

    shape.tempMode = true;
    this.shapes.push(shape);

    this.currentTool = {
      currentTempShape: shape,
      start: start,
    };
  }

  private handleMouseUp(event: MouseEvent): void {
    if (!this.currentTool) return;

    this.currentTool.currentTempShape.tempMode = false;
    this.currentTool = undefined;
  }

  private handleMouseMove(event: MouseEvent): void {
    if (!this.currentTool) return;

    const end = this.getSVGCoordinates(event);
    this.currentTool.currentTempShape.updatePosition(this.currentTool.start, end);
  }

  private handleMouseLeave(event: MouseEvent): void {
    if (!this.currentTool) return;

    // TempMode zurücksetzen, falls Maus rausgeht
    this.currentTool.currentTempShape.tempMode = false;
    this.currentTool = undefined;
  }

  private getSVGCoordinates(event: MouseEvent): Point {
    const svgPoint = this.container.createSVGPoint();
    svgPoint.x = event.clientX;
    svgPoint.y = event.clientY;

    const ctm = this.container.getScreenCTM();
    const transformed = ctm ? svgPoint.matrixTransform(ctm.inverse()) : svgPoint;

    return { x: transformed.x, y: transformed.y };
  }
}
