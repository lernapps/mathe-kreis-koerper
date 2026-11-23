// Logic of the component Torte: a circle cut into n equal pieces, the pieces laid next to each other (one pointing up,
// the next down) give a figure that is almost a rectangle: about π · r wide and r high. Pure functions.

/** The numbers of pieces the learner can choose. */
export const STUFEN: readonly number[] = [4, 8, 16, 32];

/** Width of the laid-out figure in units of r, without the two half pieces at the ends: n · sin(π / n); it approaches π. */
export function breite(n: number): number {
  return n * Math.sin(Math.PI / n);
}

/** A number with a decimal comma and a fixed count of decimals ("3,1058"). */
export function zahl(x: number, stellen: number): string {
  return x.toFixed(stellen).replace(".", ",");
}

export type Stueck = { d: string; hoch: boolean };

function f(x: number): string {
  return x.toFixed(2);
}

/** The pieces as a circle with the centre (cx, cy): a path each. */
export function kreisStuecke(n: number, r: number, cx: number, cy: number): Stueck[] {
  const a = (2 * Math.PI) / n;
  return Array.from({ length: n }, (_, k) => {
    const w1 = -Math.PI / 2 + k * a;
    const w2 = w1 + a;
    const p1 = [cx + r * Math.cos(w1), cy + r * Math.sin(w1)];
    const p2 = [cx + r * Math.cos(w2), cy + r * Math.sin(w2)];
    return {
      d: `M${f(cx)},${f(cy)} L${f(p1[0]!)},${f(p1[1]!)} A${f(r)},${f(r)} 0 0 1 ${f(p2[0]!)},${f(p2[1]!)} Z`,
      hoch: k % 2 === 1,
    };
  });
}

/** The pieces laid next to each other, the baseline at height y1, the left end at x0. */
export function umgelegt(n: number, r: number, x0: number, y1: number): Stueck[] {
  const a = (2 * Math.PI) / n;
  const s = r * Math.sin(a / 2);
  const c = r * Math.cos(a / 2);
  return Array.from({ length: n }, (_, k) => {
    const cx = x0 + s + k * s;
    if (k % 2 === 0) {
      // apex at the bottom, the arc on top
      return {
        d: `M${f(cx)},${f(y1)} L${f(cx - s)},${f(y1 - c)} A${f(r)},${f(r)} 0 0 1 ${f(cx + s)},${f(y1 - c)} Z`,
        hoch: false,
      };
    }
    // apex at the top (at the corner of its neighbour), the arc at the bottom
    const ay = y1 - c;
    return {
      d: `M${f(cx)},${f(ay)} L${f(cx + s)},${f(ay + c)} A${f(r)},${f(r)} 0 0 1 ${f(cx - s)},${f(ay + c)} Z`,
      hoch: true,
    };
  });
}

/** The width of the whole laid-out figure in the same units as r: (n + 1) · r · sin(π / n). */
export function gesamtbreite(n: number, r: number): number {
  return (n + 1) * r * Math.sin(Math.PI / n);
}

/** The sentence under the figure, with {n} and {b}. */
export function satz(n: number, vorlage: string): string {
  return vorlage.replace("{n}", String(n)).replace("{b}", zahl(breite(n), 3));
}
