const N = 20;
const p = new Array(N).fill(false).map(_ => new Array(N).fill(false));

const failResult = [];

for (let k = 3; k < 20; ++k) {
  for (let n = 1; n < k; ++n) {
    const m = k - n;
    for (let i = 1; i < n; ++i) {
      if (!p[i][n - i]) {
        p[n][m] = true;
      }
    }
    for (let i = 1; i < m; ++i) {
      if (!p[i][m - i]) {
        p[n][m] = true;
      }
    }
    if (n <= m && !p[n][m]) {
      failResult.push([n, m]);
    }
  }
}

failResult.sort((x, y) => {
  if (x[0] == y[0]) {
    return x[1] - y[1];
  }
  return x[0] - y[0];
});

failResult.map(([n, m]) => console.log(n, m));
