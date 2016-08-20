export default class LandingController {
  constructor(sortingService) {
    this.sortingService = sortingService;

    this.model = {};
  }

  onWordAdding() {
    const reference = this.model.reference;
    const newWord = this.model.newWord;

    if (!reference || !newWord) {
      return;
    }

    this.model.newWord = '';

    this.model.list = this.sortingService.addWord(reference.trim(), newWord.trim());
  }

  onWordRemoval() {
    this.model.list = this.sortingService.removeWord();
  }
}

LandingController.$inject = ['sorting'];
