export type Point = {
  x: number;
  y: number;
};

export abstract class Shape {
  constructor(
    protected svg: SVGSVGElement,
    protected start: Point,
  ) {}

  public abstract updatePosition(start: Point, end: Point): void;
  public abstract set tempMode(isTemp: boolean);
}

/* ===== CIRCLE ===== */

export class Circle extends Shape {
  private element: SVGCircleElement;

  constructor(svg: SVGSVGElement, start: Point) {
    super(svg, start);

    this.element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    svg.appendChild(this.element);
  }

  updatePosition(start: Point, end: Point): void {
    const r = Math.hypot(end.x - start.x, end.y - start.y);
    this.element.setAttribute('cx', `${start.x}`);
    this.element.setAttribute('cy', `${start.y}`);
    this.element.setAttribute('r', `${r}`);
  }

  set tempMode(isTemp: boolean) {
    this.element.classList.toggle('temp', isTemp);
  }
}

/* ===== RECTANGLE ===== */

export class Rectangle extends Shape {
  private element: SVGRectElement;

  constructor(svg: SVGSVGElement, start: Point) {
    super(svg, start);

    this.element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    svg.appendChild(this.element);
  }

  updatePosition(start: Point, end: Point): void {
    const x = Math.min(start.x, end.x);
    const y = Math.min(start.y, end.y);
    const w = Math.abs(end.x - start.x);
    const h = Math.abs(end.y - start.y);

    this.element.setAttribute('x', `${x}`);
    this.element.setAttribute('y', `${y}`);
    this.element.setAttribute('width', `${w}`);
    this.element.setAttribute('height', `${h}`);
  }

  set tempMode(isTemp: boolean) {
    this.element.classList.toggle('temp', isTemp);
  }
}

/* ===== LINE ===== */

export class Line extends Shape {
  private element: SVGLineElement;

  constructor(svg: SVGSVGElement, start: Point) {
    super(svg, start);

    this.element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    this.element.setAttribute('x1', `${start.x}`);
    this.element.setAttribute('y1', `${start.y}`);
    this.element.setAttribute('x2', `${start.x}`);
    this.element.setAttribute('y2', `${start.y}`);

    svg.appendChild(this.element);
  }

  updatePosition(start: Point, end: Point): void {
    this.element.setAttribute('x2', `${end.x}`);
    this.element.setAttribute('y2', `${end.y}`);
  }

  set tempMode(isTemp: boolean) {
    this.element.classList.toggle('temp', isTemp);
  }
}

export class Triangle extends Shape {
  private element: SVGElement;

  constructor(svg: SVGSVGElement, start: Point) {
    super(svg, start);

    this.element = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

    // Anfang: alle Punkte auf Start
    const points = `${start.x},${start.y} ${start.x},${start.y} ${start.x},${start.y}`;
    this.element.setAttribute('points', points);

    svg.appendChild(this.element);
  }

  public override updatePosition(start: Point, end: Point): void {
    // Gleichschenkliges Dreieck
    // Spitze: Mitte oben
    const top: Point = { x: (start.x + end.x) / 2, y: start.y };
    const leftBase: Point = { x: start.x, y: end.y };
    const rightBase: Point = { x: end.x, y: end.y };

    const points = `${top.x},${top.y} ${leftBase.x},${leftBase.y} ${rightBase.x},${rightBase.y}`;
    this.element.setAttribute('points', points);
  }

  public override set tempMode(isTemp: boolean) {
    this.element.classList.toggle('temp', isTemp);
  }
}
