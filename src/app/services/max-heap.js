export default class MaxHeap {

  constructor() {
    this.content = [];
  }

  push(element) {
    // Add the new element to the end of the array.
    this.content.push(element);
    // Allow it to bubble up.
    this.bubbleUp(this.content.length - 1);

    return this.content;
  }

  pop() {
    // Get the element at the end of the array.
    const end = this.content.pop();
    // If there are any elements left, put the end element at the
    // start, and let it sink down.
    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return this.content;
  }

  bubbleUp(n) {
    // Fetch the element that has to be moved.
    const element = this.content[n];

    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      const parentPosition = Math.floor((n + 1) / 2) - 1;
      const parent = this.content[parentPosition];

      // If the parent has a lesser score, things are in order and we
      // are done.
      if (element.distance <= parent.distance) {
        break;
      }

      // Otherwise, swap the parent with the current element and
      // continue.
      this.content[parentPosition] = element;
      this.content[n] = parent;
      n = parentPosition;
    }
  }

  sinkDown(n) {
    // Look up the target element and its score.
    const length = this.content.length;
    const element = this.content[n];

    while (true) {
      // Compute the indices of the child elements.
      const child2Position = (n + 1) * 2;
      const child1Position = child2Position - 1;
      // This is used to store the new position of the element,
      // if any.
      let swap = null;
      // If the first child exists (is inside the array)...
      if (child1Position < length) {
        // Look it up and compute its score.
        const child1 = this.content[child1Position];
        // If the score is less than our element's, we need to swap.
        if (child1 > element) {
          swap = child1Position;
        }
      }
      // Do the same checks for the other child.
      if (child2Position < length) {
        const child2 = this.content[child2Position];
        if (child2.distance > (swap === null ? element.distance : child1.distance)) {
          swap = child2Position;
        }
      }

      // No need to swap further, we are done.
      if (swap === null) {
        break;
      }

      // Otherwise, swap and continue.
      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
}
