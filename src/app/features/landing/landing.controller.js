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

  isAdditionDisabled() {
    return !this.model.reference || !this.model.newWord;
  }
}

LandingController.$inject = ['sorting'];
