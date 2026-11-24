// Logic of the component Vieleck: regular polygons inside and outside a circle of radius 1 enclose the number π.
// Pure functions, no browser objects. The inscribed n-gon has perimeter 2·n·sin(π/n), the circumscribed one 2·n·tan(π/n);
// the circle has diameter 2, so dividing by 2 gives the bounds n·sin(π/n) < π < n·tan(π/n).

/** The numbers of corners the learner can choose. */
export const STUFEN: readonly number[] = [6, 12, 24, 48, 96];

/** Lower and upper bound for π from a polygon with n corners. */
export function schranken(n: number): { innen: number; aussen: number } {
  return { innen: n * Math.sin(Math.PI / n), aussen: n * Math.tan(Math.PI / n) };
}

/** A number with a decimal comma and a fixed count of decimals ("3,1058"). */
export function zahl(x: number, stellen: number): string {
  return x.toFixed(stellen).replace(".", ",");
}

/** Corners of the inscribed polygon (a corner at the top) of the unit circle, y pointing down. */
export function eckenInnen(n: number): [number, number][] {
  return Array.from({ length: n }, (_, k) => {
    const w = -Math.PI / 2 + (2 * Math.PI * k) / n;
    return [Math.cos(w), Math.sin(w)] as [number, number];
  });
}

/** Corners of the circumscribed polygon: its sides touch the circle where the inscribed corners are. */
export function eckenAussen(n: number): [number, number][] {
  const r = 1 / Math.cos(Math.PI / n);
  return Array.from({ length: n }, (_, k) => {
    const w = -Math.PI / 2 + (2 * Math.PI * k) / n + Math.PI / n;
    return [r * Math.cos(w), r * Math.sin(w)] as [number, number];
  });
}

/** SVG points attribute for a list of corners, scaled by s and moved by (cx, cy). */
export function punkte(ecken: [number, number][], s: number, cx: number, cy: number): string {
  return ecken.map(([x, y]) => `${(cx + s * x).toFixed(2)},${(cy + s * y).toFixed(2)}`).join(" ");
}

/** The sentence under the figure, also read by screen readers. */
export function satz(n: number, vorlage: string): string {
  const { innen, aussen } = schranken(n);
  return vorlage.replace("{n}", String(n)).replace("{innen}", zahl(innen, 4)).replace("{aussen}", zahl(aussen, 4));
}
