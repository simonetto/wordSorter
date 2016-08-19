import sorting from './sorting.service';
import angular from 'angular';
import 'angular-mocks/angular-mocks';

describe('Service: Sorting', () => {
  let $service;

  beforeEach(angular.mock.module(sorting));

  beforeEach(angular.mock.inject(_sorting_ => {
    $service = _sorting_;
  }));

  it('words are equal', () => {
    const distance = $service.getDistance('test', 'test');
    expect(distance).toBe(0);
  });

  it('words are equal with spaces in the middle', () => {
    const distance = $service.getDistance('a  b', 'a  b');
    expect(distance).toBe(0);
  });

  it('words are equal with special charactes', () => {
    const distance = $service.getDistance('<script>alert("hello")</script>', '<script>alert("hello")</script>');
    expect(distance).toBe(0);
  });

  it('distance of one in a shorter new word', () => {
    const distance = $service.getDistance('test', 'tes');
    expect(distance).toBe(1);
  });

  it('distance of one in a shorter reference word', () => {
    const distance = $service.getDistance('test', 'tests');
    expect(distance).toBe(1);
  });

  it('test an empty new word', () => {
    const distance = $service.getDistance('test', '');
    expect(distance).toBe(4);
  });

  it('test an empty reference word', () => {
    const distance = $service.getDistance('', 'test');
    expect(distance).toBe(4);
  });

  it('comparing one letter equal words', () => {
    const distance = $service.getDistance('a', 'a');
    expect(distance).toBe(0);
  });

  it('comparing one letter different words', () => {
    const distance = $service.getDistance('a', 'b');
    expect(distance).toBe(1);
  });

  it('missing letter in the middle', () => {
    const distance = $service.getDistance('tests', 'tets');
    expect(distance).toBe(1);
  });

  it('extra letter in the middle', () => {
    const distance = $service.getDistance('tets', 'tests');
    expect(distance).toBe(1);
  });

  it('difference of 3 at the end', () => {
    const distance = $service.getDistance('test', 'teXXX');
    expect(distance).toBe(3);
  });

  it('difference of 3 at the middle', () => {
    const distance = $service.getDistance('tests', 'tXXXs');
    expect(distance).toBe(3);
  });

  it('difference of 3 at the beginning', () => {
    const distance = $service.getDistance('tests', 'XXXts');
    expect(distance).toBe(3);
  });
});
