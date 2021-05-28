export const computeArray = (tet_dir) => {
  var n, a, b, x1, x2, x3, x4, d;
  var perm4 = new Array(96);
  d = 0;
  for (x1 = 1; x1 < 5; x1++) {
    for (x2 = 1; x2 < 5; x2++) {
      for (x3 = 1; x3 < 5; x3++) {
        for (x4 = 1; x4 < 5; x4++) {
          a =
            (x1 - x2) *
            (x1 - x3) *
            (x1 - x4) *
            (x2 - x3) *
            (x2 - x4) *
            (x3 - x4);
          if (a ** 2 > 0) {
            perm4[4 * d] = x1;
            perm4[4 * d + 1] = x2;
            perm4[4 * d + 2] = x3;
            perm4[4 * d + 3] = x4;
            d++;
          }
        }
      }
    }
  }
  for (n = 0; n < 24; n++) {
    tet_dir[12 * n] = Math.trunc(n / 2);
    if (n < 6) {
      tet_dir[12 * n + 1] = perm4[4 * n + 2] - 2;
      tet_dir[12 * n + 2] = perm4[4 * n + 3] - 2;
      tet_dir[12 * n + 3] = 3 * (perm4[4 * n + 1] - 1);
      tet_dir[12 * n + 6] = 3 * (perm4[4 * n + 2] - 1);
      tet_dir[12 * n + 9] = 3 * (perm4[4 * n + 3] - 1);

      a = perm4[4 * n + 1];
      b = perm4[4 * n + 2];
      tet_dir[12 * n + 4] = 3 * a - Math.trunc((18 - a - 2 * b) / 5);
      a = perm4[4 * n + 1];
      b = perm4[4 * n + 3];
      tet_dir[12 * n + 5] = 3 * a - Math.trunc((18 - a - 2 * b) / 5);
      a = perm4[4 * n + 2];
      b = perm4[4 * n + 1];
      tet_dir[12 * n + 7] = 3 * a - Math.trunc((18 - a - 2 * b) / 5);

      a = perm4[4 * n + 2];
      b = perm4[4 * n + 3];
      tet_dir[12 * n + 8] = 3 * a - Math.trunc((18 - a - 2 * b) / 5);
      a = perm4[4 * n + 3];
      b = perm4[4 * n + 1];
      tet_dir[12 * n + 10] = 3 * a - Math.trunc((18 - a - 2 * b) / 5);
      a = perm4[4 * n + 3];
      b = perm4[4 * n + 2];
      tet_dir[12 * n + 11] = 3 * a - Math.trunc((18 - a - 2 * b) / 5);
    } else {
      tet_dir[12 * n + 1] = tet_dir[12 * (n - 6) + 1] + 3;
      tet_dir[12 * n + 2] = tet_dir[12 * (n - 6) + 2] + 3;

      // prettier-ignore
      if (perm4[4 * n + 1] < perm4[4 * (n - 6) + 1])  tet_dir[12 * n + 3] = tet_dir[12 * (n - 6) + 3] - 3;
        else                                            tet_dir[12 * n + 3] = tet_dir[12 * (n - 6) + 3] + 1;
      // prettier-ignore
      if (perm4[4 * n + 2] < perm4[4 * (n - 6) + 2])  tet_dir[12 * n + 6] = tet_dir[12 * (n - 6) + 6] - 3;
        else                                            tet_dir[12 * n + 6] = tet_dir[12 * (n - 6) + 6] + 1;
      // prettier-ignore
      if (perm4[4 * n +3] < perm4[4 * (n - 6) + 3])  tet_dir[12 * n + 9] = tet_dir[12 * (n - 6) + 9] - 3;
        else                                            tet_dir[12 * n + 9] = tet_dir[12 * (n - 6) + 9] + 1;
      // prettier-ignore
      if      (perm4[4 * (n - 6) + 1] > perm4[4 * n + 1])  tet_dir[12 * n + 4] = tet_dir[12 * (n - 6) + 4] - 3;
        else if (perm4[4 * (n - 6) + 2] > perm4[4 * n + 2])  tet_dir[12 * n + 4] = tet_dir[12 * (n - 6) + 4] - 1;
        else                                                 tet_dir[12 * n + 4] = tet_dir[12 * (n - 6) + 4];
      // prettier-ignore
      if      (perm4[4 * (n - 6) + 1] > perm4[4 * n + 1])  tet_dir[12 * n + 5] = tet_dir[12 * (n - 6) +5] - 3;
        else if (perm4[4 * (n - 6) + 3] > perm4[4 * n + 3])  tet_dir[12 * n + 5] = tet_dir[12 * (n - 6) + 5] - 1;
        else                                                 tet_dir[12 * n + 5] = tet_dir[12 * (n - 6) + 5];
      // prettier-ignore
      if      (perm4[4 * (n - 6) + 2] > perm4[4 * n + 2])  tet_dir[12 * n + 7] = tet_dir[12 * (n - 6) +7] - 3;
        else if (perm4[4 * (n - 6) + 1] > perm4[4 * n + 1])  tet_dir[12 * n + 7] = tet_dir[12 * (n - 6) + 7] - 1;
        else                                                 tet_dir[12 * n + 7] = tet_dir[12 * (n - 6) + 7];
      // prettier-ignore
      if      (perm4[4 * (n - 6) + 2] > perm4[4 * n + 2])  tet_dir[12 * n + 8] = tet_dir[12 * (n - 6) + 8] - 3;
        else if (perm4[4 * (n - 6) + 3] > perm4[4 * n + 3])  tet_dir[12 * n + 8] = tet_dir[12 * (n - 6) + 8] - 1;
        else                                                 tet_dir[12 * n + 8] = tet_dir[12 * (n - 6) + 8];
      // prettier-ignore
      if      (perm4[4 * (n - 6) + 3] > perm4[4 * n + 3])  tet_dir[12 * n + 10] = tet_dir[12 * (n - 6) + 10] - 3;
        else if (perm4[4 * (n - 6) + 1] > perm4[4 * n + 1])  tet_dir[12 * n + 10] = tet_dir[12 * (n - 6) + 10] - 1;
        else                                                 tet_dir[12 * n + 10] = tet_dir[12 * (n - 6) + 10];
      // prettier-ignore
      if      (perm4[4 * (n - 6) + 3] > perm4[4 * n + 3])  tet_dir[12 * n + 11] = tet_dir[12 * (n - 6) + 11] - 3;
        else if (perm4[4 * (n - 6) + 2] > perm4[4 * n + 2])  tet_dir[12 * n + 11] = tet_dir[12 * (n - 6) + 11] - 1;
        else                                                 tet_dir[12 * n + 11] = tet_dir[12 * (n - 6) + 11];
    }
  }
};
