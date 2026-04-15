export class Game {
  private svg = document.getElementById('svg') as unknown as SVGSVGElement;

  private bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  private move = {
    start: -1,
    end: -1,
  };
  constructor() {
    this.bar.setAttribute('x', '0');
    this.bar.setAttribute('y', '550');
    this.bar.setAttribute('width', '1200');
    this.bar.setAttribute('height', '35');
    this.bar.setAttribute('fill', '#ff0000');

    this.svg.appendChild(this.bar);

    for (let i = 0; i < 3; i++) {
      const pillar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      pillar.setAttribute('x', String(230 + i * 360));
      pillar.setAttribute('y', '200');
      pillar.setAttribute('width', '20');
      pillar.setAttribute('height', '350');
      pillar.setAttribute('fill', '#94A3B8');

      this.svg.appendChild(pillar);
    }

    const disks: SVGRectElement[] = [];
    const colors = ['#6366F1', '#06B6D4', '#22C55E', '#EAB308'];

    for (let i = 0; i < 4; i++) {
      const disk = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      disk.setAttribute('x', String(110 + i * 25));
      disk.setAttribute('y', String(500 - i * 50));
      disk.setAttribute('width', String(250 - i * 50));
      disk.setAttribute('height', '50');
      disk.setAttribute('rx', '20');
      disk.setAttribute('ry', '20');
      disk.setAttribute('fill', String(colors[i]));
      disks.push(disk);

      this.svg.appendChild(disk);
    }
  }
  public acceptInput(button: number) {
    console.log(button);

    if (this.move.start === -1) {
      this.move.start = button;
    } else if (this.move.end === -1) {
      this.move.end = button;
      console.log(`Bewegung von ${this.move.start} bis ${this.move.end}`);
      this.move.start = -1;
      this.move.end = -1;
    }
  }
}
