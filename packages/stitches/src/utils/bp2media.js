export const bp2media = bps => {
  if (bps.length === 0) {
    return {};
  }
  const res = {
    m1: ` (max-width: ${bps[0]}px)`,
  };
  bps
    .map((bp, i) => {
      // if (i <= bps.length - 2) {
        // return `and (min-width: ${bp + 1}px) and (max-width:${bp[i + 1]}px)`;
      // }
      return ` (min-width: ${bp }px)`;
    })
    .forEach((media, i) => {
      res[`m${i + 2}`] = media;
    });

  return res;
};