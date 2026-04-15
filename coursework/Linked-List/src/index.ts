type Song = {
  title: string;
  artist: string;
};

class Node {
  data: Song;
  next: Node | null;

  constructor(data: Song) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null = null;

  public insertAtBeginning(data: Song): void {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  public find(title: string): Node | null {
    // Suche Knoten mit passendem Titel
    let current = this.head;
    while (current !== null) {
      if (current.data.title === title) {
        return current;
      }
      current = current.next;
    }

    return null;

    // wenn gefunden dann zurückgeben
    // wenn nicht gefunden null zurückgeben
  }

  public insertAfter(index: number, data: Song): boolean {
  public findIndex(index: number): Node | null {
    let current = this.head;
    for (let count = 0; current !== null; count++) {
      if (count === index) {
      }
      current = current.next;
    }

    return null;
  }
}
}