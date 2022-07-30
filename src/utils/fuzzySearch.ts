export function fuzzySearch(search: string, target: string) {
  let hlen = target.length;
  let nlen = search.length;

  if (nlen > hlen) return false;
  if (nlen === hlen) return search === target;

  outer: for (let i = 0, j = 0; i < nlen; i++) {
    let nch = search.charCodeAt(i);
    while (j < hlen) {
      if (target.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}
