export default class LandingController {
  constructor(sortingService) {
    this.sortingService = sortingService;

    this.model = {};
  }

  onWordAdding() {
    const reference = this.model.reference.trim();
    const newWord = this.model.newWord.trim();
    this.model.newWord = '';

    this.model.list = this.sortingService.addWord(reference, newWord);
  }

  onWordRemoval() {
    this.model.list = this.sortingService.removeWord();
  }
}

LandingController.$inject = ['sorting'];
