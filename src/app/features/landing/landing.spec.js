import landing from './index';
import angular from 'angular';
import 'angular-mocks/angular-mocks';

describe('Controller: Landing', () => {
  let $controller;

  beforeEach(angular.mock.module(landing));

  beforeEach(angular.mock.inject(_$controller_ => {
    $controller = _$controller_;
  }));

  it('should now allow empty words', () => {
    const ctrl = $controller('LandingController');

    ctrl.model.reference = '';
    ctrl.model.newWord = 'fest';
    ctrl.onWordAdding();

    expect(ctrl.model.list).toBe(undefined);
  });

  it('add five words', () => {
    const ctrl = $controller('LandingController');

    ctrl.model.reference = 'test';
    ctrl.model.newWord = 'fest';
    ctrl.onWordAdding();

    ctrl.model.newWord = 'festtest';
    ctrl.onWordAdding();

    ctrl.model.newWord = 'test';
    ctrl.onWordAdding();

    ctrl.model.newWord = 'f';
    ctrl.onWordAdding();

    ctrl.model.newWord = 'rest';
    ctrl.onWordAdding();

    expect(ctrl.model.list).toEqual([
      {
        word: 'test',
        similarity: 4
      },
      {
        word: 'rest',
        similarity: 3
      },
      {
        word: 'fest',
        similarity: 3
      },
      {
        word: 'f',
        similarity: 0
      },
      {
        word: 'festtest',
        similarity: 0
      }
    ]);
  });

  it('remove word', () => {
    const ctrl = $controller('LandingController');

    ctrl.model.reference = 'test';
    ctrl.model.newWord = 'fest';
    ctrl.onWordAdding();

    ctrl.model.newWord = 'festtest';
    ctrl.onWordAdding();

    ctrl.model.newWord = 'test';
    ctrl.onWordAdding();

    ctrl.model.newWord = 'f';
    ctrl.onWordAdding();

    ctrl.model.newWord = 'rest';
    ctrl.onWordAdding();

    ctrl.onWordRemoval();

    expect(ctrl.model.list).toEqual([
      {
        word: 'rest',
        similarity: 3
      },
      {
        word: 'festtest',
        similarity: 0
      },
      {
        word: 'fest',
        similarity: 3
      },
      {
        word: 'f',
        similarity: 0
      }
    ]);
  });
});
