// Logic of the component Einheitskreis: an angle on the unit circle (radius 1) cuts out an arc. The arc length is the
// angle in radians. Pure functions, no browser objects. Angles are whole degrees in steps of 15.

/** The angles (in degrees) the learner can choose: 0, 15, … 360. */
export const WINKEL: readonly number[] = Array.from({ length: 25 }, (_, i) => i * 15);

/** The arc length on the unit circle for an angle in degrees: x = α · π / 180. */
export function bogen(grad: number): number {
  return (grad * Math.PI) / 180;
}

/** A number with a decimal comma, a real minus sign (U+2212) and a fixed count of decimals ("1,047", "−0,500"). */
export function zahl(x: number, stellen: number): string {
  const t = x.toFixed(stellen);
  if (Number(t) === 0) return t.replace("-", "").replace(".", ",");
  return t.replace(".", ",").replace("-", "\u2212");
}

function ggt(a: number, b: number): number {
  return b === 0 ? a : ggt(b, a % b);
}

/** The angle as a multiple of π: grad / 180 as a reduced fraction { zaehler, nenner } (0 gives 0 over 1). */
export function exakt(grad: number): { zaehler: number; nenner: number } {
  if (grad === 0) return { zaehler: 0, nenner: 1 };
  const g = ggt(grad, 180);
  return { zaehler: grad / g, nenner: 180 / g };
}

/** The point on the circle for an angle (counter-clockwise from the right), as x (cosine) and y (sine). */
export function punkt(grad: number): { x: number; y: number } {
  const w = (grad * Math.PI) / 180;
  return { x: Math.cos(w), y: Math.sin(w) };
}

/** SVG coordinates (y pointing down) of the point for an angle, with the centre (cx, cy) and radius r. */
export function bildPunkt(grad: number, r: number, cx: number, cy: number): [number, number] {
  const p = punkt(grad);
  return [cx + r * p.x, cy - r * p.y];
}

/** SVG path of the arc from 0° to the angle on a circle of radius r. A full circle is drawn as two half arcs. */
export function bogenPfad(grad: number, r: number, cx: number, cy: number): string {
  if (grad <= 0) return "";
  const start = bildPunkt(0, r, cx, cy);
  if (grad >= 360) {
    const mitte = bildPunkt(180, r, cx, cy);
    return `M${start[0]},${start[1]} A${r},${r} 0 1 0 ${mitte[0]},${mitte[1]} A${r},${r} 0 1 0 ${start[0]},${start[1]}`;
  }
  const ende = bildPunkt(grad, r, cx, cy);
  return `M${start[0].toFixed(2)},${start[1].toFixed(2)} A${r},${r} 0 ${grad > 180 ? 1 : 0} 0 ${ende[0].toFixed(2)},${ende[1].toFixed(2)}`;
}

/** The text of the angle as a multiple of π, as words for the screen reader: "π durch 6", "2 π". */
export function exaktWorte(grad: number): string {
  const { zaehler, nenner } = exakt(grad);
  if (zaehler === 0) return "0";
  const oben = zaehler === 1 ? "π" : `${zaehler} π`;
  return nenner === 1 ? oben : `${oben} durch ${nenner}`;
}

/** The sentence under the figure, with {grad} and {bogen}. */
export function satz(grad: number, vorlage: string): string {
  return vorlage.replace("{grad}", String(grad)).replace("{bogen}", zahl(bogen(grad), 3));
}
