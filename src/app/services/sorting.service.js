import angular from 'angular';
import MaxHeap from './max-heap';

class Sorting {

  constructor() {
    this.tree = new MaxHeap();
  }

  /**
    gets the Levenshtein distance of the given words
  **/
  getDistance(reference, newWord) {
    const matrix = [];
    let i;
    let j;
    const min = Math.min;

    if (!(reference && newWord)) {
      return (newWord || reference).length;
    }

    for (i = 0; i <= newWord.length; i++) {
      matrix[i] = [i];
    }

    for (j = 0; j <= reference.length; j++) {
      matrix[0][j] = j;
    }

    for (i = 1; i <= newWord.length; i++) {
      for (j = 1; j <= reference.length; j++) {
        matrix[i][j] = newWord.charAt(i - 1) === reference.charAt(j - 1) ?
                matrix[i - 1][j - 1] :
                matrix[i][j] = min(
                    matrix[i - 1][j - 1] + 1,
                    min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }

    return matrix[newWord.length][reference.length];
  }

  addWord(reference, newWord) {
    const node = {
      distance: reference.length - this.getDistance(reference, newWord),
      word: newWord
    };

    return this.tree.push(node);
  }

  removeWord() {
    return this.tree.pop();
  }
}

export default angular.module('services.forecast', [])
  .service('sorting', Sorting)
  .name;
