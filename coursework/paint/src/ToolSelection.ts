export enum ToolType {
  CIRCLE,
  RECTANGLE,
  LINE,
  TRIANGLE
}

type ToolChangeCallback = (tool: ToolType) => void;

export class ToolSelection {
  private toolContainer: HTMLDivElement;

  constructor(
    private callback: ToolChangeCallback,
    toolContainerId: string = 'tool-container'
  ) {
    this.toolContainer = document.getElementById(toolContainerId) as HTMLDivElement;

    this.toolContainer.appendChild(this.createButton(ToolType.CIRCLE, 'Circle', true));
    this.toolContainer.appendChild(this.createButton(ToolType.RECTANGLE, 'Rectangle'));
    this.toolContainer.appendChild(this.createButton(ToolType.LINE, 'Line'));
    this.toolContainer.appendChild(this.createButton(ToolType.TRIANGLE, 'Triangle'));

  }

  private createButton(
    tool: ToolType,
    label: string,
    selected: boolean = false
  ): HTMLButtonElement {
    const button = document.createElement('button');
    button.textContent = label;

    button.addEventListener('click', () => {
      this.unselectAll();
      button.className = 'selected';
      this.callback(tool);
    });

    if (selected) {
      button.className = 'selected';
      this.callback(tool);
    }

    return button;
  }

  private unselectAll() {
    for (const child of this.toolContainer.children) {
      (child as HTMLElement).className = '';
    }
  }
}
