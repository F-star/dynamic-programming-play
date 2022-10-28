/* 0-1背包问题 */

/**
 * 求最大重量
 *
 * 将 n 个物品（重量用 weight 数组表示）装入背包，在不超出背包总重量 w 的情况下，求能装入的最大重量。
 * @param weight 各个物品的重量
 * @param w 背包可以装的最大总重量
 * @returns 能装入的最大重量
 */
export function knapsackMaxWeight(weight: number[], w: number): number {
  const n = weight.length;
  // 初始化 boolean 类型的二维数组，范围：[n][w + 1]
  const dp: boolean[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(w + 1);
  }
  // 第 0 次决策的状态先初始化好，这样才能递推
  dp[0][0] = true; // 不装入
  if (weight[0] <= w) { // 装入 weight[0]，当然不能越界。
    dp[0][weight[0]] = true;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (
        dp[i - 1][j] === true ||
        (j - weight[i] >= 0 && dp[i - 1][j - weight[i]] === true)
      ) {
        dp[i][j] = true;
      }
    }
  }

  for (let i = w; i >= 0; i--) {
    if (dp[n - 1][i] === true) return i;
  }
  return 0;
}

/**
 * 求能否刚好装满
 *
 * 将 n 个物品（重量用 weight 数组表示）装入背包，背包容量为 w，能否刚好装满背包？
 * @param weight 各个物品的重量
 * @param w 背包可以装的最大总重量
 * @returns 能装入的最大重量
 */
export function knapsackJustFillUp(weight: number[], w: number): boolean {
  const n = weight.length;
  // 初始化 boolean 类型的二维数组，范围：[n][w + 1]
  const dp: boolean[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(w + 1).fill(false);
  }
  // 第 0 次决策的状态先初始化好，这样才能递推
  dp[0][0] = true; // 不装入
  if (weight[0] <= w) { // 装入 weight[0]，当然不能越界。
    dp[0][weight[0]] = true;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (
        dp[i - 1][j] === true ||
        (j - weight[i] >= 0 && dp[i - 1][j - weight[i]] === true)
      ) {
        dp[i][j] = true;
      }
    }
  }

  return dp[n - 1][w];
}

/**
 * 刚好装满书包总最少物品数
 *
 * 将 n 个物品（重量用 weight 数组表示）装入背包，背包容量为 w，求装刚好满背包的最少物品数。
 * @param weight 各个物品的重量
 * @param w 背包可以装的最大总重量
 * @returns 最少物品数
 */
export function knapsackMinCount(weight: number[], w: number): number {
  const n = weight.length;
  // 初始化 number 类型的二维数组，范围：[n][w + 1]
  const dp: number[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(w + 1).fill(Number.MAX_SAFE_INTEGER);
  }
  // 第 0 次决策的状态先初始化好，这样才能递推
  dp[0][0] = 0; // 不装入
  if (weight[0] <= w) { // 装入 weight[0]，当然不能越界。
    dp[0][weight[0]] = 1; // 装入第一个
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      dp[i][j] = dp[i - 1][j]; // 不装入
      if (j - weight[i] >= 0 && dp[i - 1][j - weight[i]] !== Number.MAX_SAFE_INTEGER) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - weight[i]] + 1); // 装入
      }
    }
  }

  if (dp[n - 1][w] === Number.MAX_SAFE_INTEGER) return -1;
  return dp[n - 1][w];
}

/**
 * 装满背包总共有几种装法
 *
 * 将 n 个物品（重量用 weight 数组表示）装入背包，背包容量为 w，求装满背包总共有几种装法。
 * @param weight 各个物品的重量
 * @param w 背包可以装的最大总重量
 * @returns 几种装法
 */
export function knapsackWays(weight: number[], w: number): number {
  const n = weight.length;
  // 初始化 number 类型的二维数组，范围：[n][w + 1]
  const dp: number[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(w + 1).fill(0);
  }
  // 第 0 次决策的状态先初始化好，这样才能递推
  dp[0][0] = 1; // 不装入
  if (weight[0] <= w) { // 装入 weight[0]，当然不能越界。
    dp[0][weight[0]] = 1; // 装入第一个
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j - weight[i] >= 0) {
        dp[i][j] += dp[i - 1][j - weight[i]];
      }
    }
  }

  return dp[n - 1][w];
}