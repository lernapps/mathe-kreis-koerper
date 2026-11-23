// Logic of the component Umschuetten: a full cone is poured into a cylinder with the same base and height, again and again.
// After three pourings the cylinder is full: the cone holds one third of the cylinder. Pure functions.

/** The number of pourings the learner can show: 0 to 3. */
export const STUFEN: readonly number[] = [0, 1, 2, 3];

/** The fill level of the cylinder after k pourings, as a part of its height. */
export function fuellung(k: number): number {
  return Math.min(Math.max(k, 0), 3) / 3;
}

/** Height in the picture of the water in the cylinder: from the bottom y1 up to the level for k pourings, height h. */
export function wasserHoehe(k: number, h: number): number {
  return h * fuellung(k);
}

/** The sentence under the figure, with {k} for the pourings and {rest} for the pourings still needed. */
export function satz(k: number, vorlage: string): string {
  return vorlage.replace("{k}", String(k)).replace("{rest}", String(3 - Math.min(Math.max(k, 0), 3)));
}
