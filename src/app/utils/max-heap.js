export default class MaxHeap {

  constructor() {
    this.content = [];
  }

  push(element) {
    this.content.push(element);
    this.bubbleUp(this.content.length - 1);

    return this.content;
  }

  pop() {
    const end = this.content.pop();

    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return this.content;
  }

  bubbleUp(n) {
    const element = this.content[n];

    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      const parentPosition = Math.floor((n + 1) / 2) - 1;
      const parent = this.content[parentPosition];

      if (element.similarity <= parent.similarity) {
        break;
      }

      this.content[parentPosition] = element;
      this.content[n] = parent;
      n = parentPosition;
    }
  }

  shouldBeSwapped(element, childPosition) {
    if (childPosition < this.content.length) {
      const child = this.content[childPosition];

      return child.similarity > element.similarity;
    }

    return false;
  }

  sinkDown(n) {
    const element = this.content[n];
    let swapPosition;

    while (swapPosition !== null) {
      // Compute the indices of the child elements.
      const child2Position = (n + 1) * 2;
      const child1Position = child2Position - 1;

      swapPosition = null;

      swapPosition = this.shouldBeSwapped(element, child1Position) ? child1Position : null;

      if (!swapPosition) {
        swapPosition = this.shouldBeSwapped(element, child2Position) ? child2Position : null;
      }

      if (swapPosition) {
        this.content[n] = this.content[swapPosition];
        this.content[swapPosition] = element;
        n = swapPosition;
      }
    }
  }
}
