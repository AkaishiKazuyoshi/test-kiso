import {calculation, inOrder, searchObject} from './calculation';

describe('calculation', () => {
  describe('sum', () => {
    it('should sum two numbers', () => {
      expect(calculation(1, 2)).toBe(3);
    });
  });

  describe('search object', () => {
    it('search one words', () => {
      const obj = {a: 1, b: {c: 2}};
      expect(searchObject(obj, (value) => value === 1)).toEqual({'object.a': 1});
    });
    it('search some words', () => {
      const obj = {a: 1, b: {c: 2, d: [{e: 3, f: 4}]}}
      expect(searchObject(obj, (value) => value > 1)).toEqual({
        'object.b.c': 2,
        'object.b.d[0].e': 3,
        'object.b.d[0].f': 4
      });
    });
    it('search some words 2', () => {
      const obj = {a: 1, b: {c: 2, d: [{e: 3}, {f: 4}]}}
      expect(searchObject(obj, (value) => value > 1)).toEqual({
        'object.b.c': 2,
        'object.b.d[0].e': 3,
        'object.b.d[1].f': 4
      });
    });
  });

  describe('order function', () => {
    it('re reverse array', () => {
      const arr = [5, 4, 3, 2, 1];
      expect(inOrder(arr, 'ASC')).toEqual([1, 2, 3, 4, 5]);
    });
    it('reverse array', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(inOrder(arr, 'DESC')).toEqual([5, 4, 3, 2, 1]);
    });
    it('reverse object', () => {
      const arr = {a: 3, b: 2, c: 1};
      expect(inOrder(arr, 'ASC')).toEqual({a: 1, b: 2, c: 3});
    });
    it('re reverse object', () => {
      const arr = {a: 1, b: 2, c: 3};
      expect(inOrder(arr, 'DESC')).toEqual({a: 3, b: 2, c: 1});
    });
  })
})