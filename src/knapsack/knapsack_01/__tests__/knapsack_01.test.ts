import {
  knapsackJustFillUp, knapsackMaxValue, knapsackMaxWeight, knapsackMinCount, knapsackWays,
} from '../knapsack_01';

describe('0-1背包问题', () => {
  describe('0-1背包问题——求可装最大重量', () => {
    test.each([
      [[1, 2, 3], 5, 5],
      [[2, 3, 5], 4, 3],
    ])('knapsack(%p, %i) -> %i', (weight, w, expected) => {
      expect(knapsackMaxWeight(weight, w)).toBe(expected);
    });
  });

  describe('0-1背包问题——求能否刚好装满', () => {
    test.each([
      [[1, 2, 3], 5, true],
      [[2, 3, 5], 4, false],
    ])('knapsack(%p, %i) -> %p', (weight, w, expected) => {
      expect(knapsackJustFillUp(weight, w)).toBe(expected);
    });
  });

  describe('0-1背包问题——求刚好装满的最少物品数量', () => {
    test.each([
      [[1, 2, 3], 5, 2],
      [[2, 3, 5], 4, -1],
      [[1, 1, 1, 1, 1, 3, 4], 8, 3],
    ])('knapsack(%p, %i) -> %i', (weight, w, expected) => {
      expect(knapsackMinCount(weight, w)).toBe(expected);
    });
  });

  describe('0-1背包问题——装满背包总共有几种装法', () => {
    test.each([
      [[2, 2], 2, 2],
      [[1, 2, 3], 5, 1],
      [[2, 3, 5], 4, 0],
      [[1, 1, 1, 3, 4], 4, 4],
    ])('knapsack(%p, %i) -> %i', (weight, w, expected) => {
      expect(knapsackWays(weight, w)).toBe(expected);
    });
  });

  describe('0-1背包问题（二维费用）——能装入的最大价值', () => {
    test.each([
      [[1, 2, 3, 4, 5], [2, 4, 4, 5, 6], 6, 10], // 选 0、1、2 位置
      [[77, 22, 29, 50, 99], [92, 22, 87, 46, 90], 100, 133],
    ])('knapsack(%p, %p, %i) -> %i', (weight, value, w, expected) => {
      expect(knapsackMaxValue(weight, value, w)).toBe(expected);
    });
  });

});
