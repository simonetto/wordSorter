import MaxHeap from './max-heap';

describe('Utils: MaxHeap', () => {
  const heap = new MaxHeap();

  beforeEach(() => {
    const items = [
      {similarity: 35},
      {similarity: 33},
      {similarity: 42},
      {similarity: 10},
      {similarity: 14},
      {similarity: 19},
      {similarity: 27},
      {similarity: 44},
      {similarity: 26},
      {similarity: 31}
    ];

    items.forEach(item => {
      heap.push(item);
    });
  });

  afterEach(() => {
    heap.content = [];
  });

  it('adding several elements', () => {
    expect(heap.content).toEqual([
      {similarity: 44},
      {similarity: 42},
      {similarity: 35},
      {similarity: 33},
      {similarity: 31},
      {similarity: 19},
      {similarity: 27},
      {similarity: 10},
      {similarity: 26},
      {similarity: 14}
    ]);
  });

  it('remove one item', () => {
    heap.pop();

    expect(heap.content).toEqual([
      {similarity: 42},
      {similarity: 33},
      {similarity: 35},
      {similarity: 26},
      {similarity: 31},
      {similarity: 19},
      {similarity: 27},
      {similarity: 10},
      {similarity: 14}
    ]);
  });

  it('remove two items', () => {
    heap.pop();
    heap.pop();

    expect(heap.content).toEqual([
      {similarity: 33},
      {similarity: 26},
      {similarity: 35},
      {similarity: 14},
      {similarity: 31},
      {similarity: 19},
      {similarity: 27},
      {similarity: 10}
    ]);
  });

  it('remove three items', () => {
    heap.pop();
    heap.pop();
    heap.pop();

    expect(heap.content).toEqual([
      {similarity: 26},
      {similarity: 14},
      {similarity: 35},
      {similarity: 10},
      {similarity: 31},
      {similarity: 19},
      {similarity: 27}
    ]);
  });

  it('remove all elements', () => {
    const length = heap.content.length;
    for (let i = 0; i < length; i++) {
      heap.pop();
    }

    expect(heap.content).toEqual([]);
  });
});
