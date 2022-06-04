export class Queue<T> {
  private items: T[] = [];

  public enqueue(item: T) {
    this.items.push(item);
  }

  public dequeue(): T | undefined {
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}