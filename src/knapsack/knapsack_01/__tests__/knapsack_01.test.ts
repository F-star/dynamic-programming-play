import { knapsackJustFillUp, knapsackMaxWeight } from '../knapsack_01';

describe('0-1背包问题', () => {
  test('0-1背包问题 —— 求可装最大重量', () => {
    const testCases: Array<[number[], number, number]> = [
      [[1, 2, 3], 5, 5],
      [[2, 3, 5], 4, 3],
    ];

    for (const c of testCases) {
      expect(knapsackMaxWeight(c[0], c[1])).toBe(c[2]);
    }
  });

  test('0-1背包问题 —— 求能否刚好装满', () => {
    const testCases: Array<[number[], number, boolean]> = [
      [[1, 2, 3], 5, true],
      [[2, 3, 5], 4, false],
    ];

    for (const c of testCases) {
      expect(knapsackJustFillUp(c[0], c[1])).toBe(c[2]);
    }
  });
});
