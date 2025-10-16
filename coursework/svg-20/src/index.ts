const add = document.getElementById('add') as HTMLButtonElement;
const select = document.getElementById('ingreeselect') as HTMLSelectElement;

let value = '';

add.addEventListener('click', () => {
  value = select.value;

  if (value === 'circle') {
    const svg = document.getElementById('svg') as unknown as SVGAElement;

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle') as SVGCircleElement;

    circle.setAttribute('fill', 'purple');
    circle.setAttribute('stroke', 'black');
    circle.setAttribute('cx', `${Math.random() * 150}`);
    circle.setAttribute('cy', `${Math.random() * 150}`);
    circle.setAttribute('r', `${Math.random() * 50}`);
    svg.appendChild(circle);      
  }

  if (value === 'rect') {
    const svg = document.getElementById('svg') as unknown as SVGAElement;
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;

    rect.setAttribute('fill' , 'cyan');
    rect.setAttribute('stroke' , 'white');
    rect.setAttribute('x' , `${Math.random()* 150}`)
    rect.setAttribute('y' , `${Math.random()* 150}`)
    rect.setAttribute('width' , `${20 + Math.random()* 100}`)
    rect.setAttribute('height' , `${20 + Math.random()* 50}`)
    svg.appendChild(rect)
  }
});
