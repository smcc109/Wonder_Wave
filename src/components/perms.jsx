export const computePerms = (P, tet_dir, r12, r13) => {
  var I = new Array(12);
  var r14,
    r21,
    r31,
    r41,
    r23,
    r34,
    r42,
    r24,
    r43,
    r32,
    s23,
    s32,
    s31,
    s13,
    s12,
    f,
    n,
    d,
    z,
    zmax;
  zmax = 0;
  for (n = 0; n < 12; n++) I[n] = n;
  /*  for (r41= 0; r41 < 4; r41++) {
    I[9] = r41;
    for (r42 = 0; r42 < 4; r42++) {
      I[10] = r42;
      for (r43 = 0; r43 < 4; r43++) {
        I[11] = r43;
        for (r14 = 0; r14 < 4; r14++) {
          I[2] = r14;
          for (r24 = 0; r24 < 4; r24++) {
            I[5] = r24;
            for (r34 = 0; r34 < 4; r34++) {
              I[8] = r34;
              for (r12 = 0; r12 < 4; r12++) {
                I[0] = r12;
                for (r23 = 0; r23 < 4; r23++) {
                  I[4] = r23;
                  for (r31 = 0; r31 < 4; r31++) {
                    I[6] = r31;
                    for (r13 = 0; r13 < 4; r13++) {
                      I[1] = r13;
                      for (r32 = 0; r32 < 4; r32++) {*/
  I[7] = r32;
  for (r21 = 0; r21 < 4; r21++) {
    I[3] = r21;
    n = 0;
    d = 0;
    while (n < 24 && d < 1) {
      s23 = I[tet_dir[12 * n + 4]];
      s32 = I[tet_dir[12 * n + 7]];
      s31 = I[tet_dir[12 * n + 6]];
      s12 = I[tet_dir[12 * n]];
      s13 = I[tet_dir[12 * n + 1]];
      n++;
      if (2 * (s12 - s32) + s31 > 5) d++;
      else if (s12 * s23 - s13 > 6) d++;
      else if (s12 * s13 - s23 * s32 > 7) d++;
      else if (s12 * s32 + s31 * s13 > 17) d++;
    }
    if (d < 1) {
      z = 0;
      f = 1;
      while (z < zmax + 1 && f > 0) {
        n = 0;
        while (n < 24 && f > 0) {
          d = 0;
          f = Math.pow(P[12 * z + d] - I[tet_dir[12 * n + d]], 2);
          while (f < 1 && d < 12) {
            d++;
            if (d < 12) {
              f = Math.pow(P[12 * z + d] - I[tet_dir[12 * n + d]], 2);
            }
          }

          n++;
        }
        z++;
      }
      if (f > 0) {
        for (d = 0; d < 12; d++) P[12 * zmax + d] = I[tet_dir[d]];
        zmax++;
        /* render();
                              {

                                return (
                                <div>
                                <button>{zmax}</button>  
                                <p> check for text</p>
                                </div>);
                             
                              }*/
      }
    }
  }
  /*}
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }*/
};
