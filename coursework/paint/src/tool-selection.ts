export enum ToolType {
    CIRCLE,
    RECTANGLE,
    LINE,
    TRIANGLE
}
 
type ToolChangeCallback = (tool: ToolType) => void;
 
export class ToolSelection {
    private currentToolValue: ToolType.Pointer;
    private toolContainer: HTMLDivElement;
 
    constructor(private callback: ToolChangeCallback, toolContainerId: string = 'tool-container') {
        this.toolContainer = document.getElementById(toolContainerId) as HTMLDivElement;
 
        this.toolContainer.appendChild(this.createToolButton(ToolType.CIRCLE, 'Circle', true));
        this.toolContainer.appendChild(this.createToolButton(ToolType.RECTANGLE, 'Rectangle'));
        this.toolContainer.appendChild(this.createToolButton(ToolType.LINE, 'Line'));
        this.toolContainer.appendChild(this.createToolButton(ToolType.Triangle, 'Triangle'));
        
    }
 
    private createToolButton(toolType: ToolType, label: string, isSelected: boolean = false): HTMLButtonElement {
        const button = document.createElement('button');
        button.textContent = label;
        button.addEventListener('click', () => {
            this.unselectAll();
            button.className = 'selected';
            this.callback(toolType);
        });
        if(isSelected){
            button.className = 'selected';
            this.callback(toolType);
        }
        return button;
    }
 
    private unselectAll(){
        for(const child of this.toolContainer.children){
            child.className = '';
        }
    }
}