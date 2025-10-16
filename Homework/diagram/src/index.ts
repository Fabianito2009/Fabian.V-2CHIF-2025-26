const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line') as SVGLineElement;
const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line') as SVGLineElement;
 
const svg = document.getElementById('svg')! as unknown as SVGSVGElement;
const diagram = document.getElementById('showD') as HTMLButtonElement;
 
line1.setAttribute('x1', '0');
line1.setAttribute('y1', '0');
line1.setAttribute('x2', '0');
line1.setAttribute('y2', '600');
line1.setAttribute('stroke', 'black');
svg.appendChild(line1);
 
line2.setAttribute('x1', '0');
line2.setAttribute('y1', '600');
line2.setAttribute('x2', '1200');
line2.setAttribute('y2', '600');
line2.setAttribute('stroke', 'black');
svg.appendChild(line2);
 
for (let i = 0; i < 12; i++) {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line') as SVGLineElement;
 
  line.setAttribute('x1', String(i * 100));
  line.setAttribute('y1', '600');
  line.setAttribute('x2', String(i * 100));
  line.setAttribute('y2', '590');
  line.setAttribute('stroke', 'black');
  svg.appendChild(line);
}
 
const value: string[] = [];
 
function getValues(): string[] {
  for (let i = 1; i <= 12; i++) {
    const input = document.getElementById(`month${i}`) as HTMLInputElement;
    if (!input || input.value === '') continue;
    value.push(input.value);
  }
  console.log(value);
  return value;
}
 
function generateDiagram() {
  const maxValue = 12;
  const maxHeight = 600;
 
  for (let i = 0; i < 12; i++) {
    const diagram = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;
 
    const height = (value[i] / maxValue) * maxHeight;
    const y = maxHeight - height;
 
    diagram.setAttribute('x', String(i * 100));
    diagram.setAttribute('y', String(y));
    diagram.setAttribute('width', '90');
    diagram.setAttribute('height', String(height));
    diagram.setAttribute('fill', 'blue');
 
    svg.appendChild(diagram);
  }
}
 
 
diagram.addEventListener('click', () => {
 
  getValues();
  generateDiagram();
});