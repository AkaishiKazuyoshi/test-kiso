import {calculation} from './calculation';

describe('calculation', () => {
  describe('sum', () => {
    it('should sum two numbers', () => {
      expect(calculation(1, 2)).toBe(3);
    });
  });
})