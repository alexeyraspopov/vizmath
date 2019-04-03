export function LinearScale(domain, range) {
  let scale = v => interpolate(range, normalize(domain, v));
  let inverse = v => interpolate(domain, normalize(range, v));
  return Object.assign(scale, { inverse });
}

export function normalize(range, x) {
  let k = range[1] - range[0];
  let b = range[0];
  return (x - b) / k;
}

export function interpolate(range, t) {
  let k = range[1] - range[0];
  let b = range[0];
  return b + k * t;
}

export function constrain(range, x) {
  return x < range[0] ? range[0] : x > range[1] ? range[1] : x;
}

export function quantile(a, p) {
  let h = (a.length - 1) * p;
  let hf = Math.floor(h);
  return a[hf] + (a[hf + 1] - a[hf]) * (h - hf);
}
