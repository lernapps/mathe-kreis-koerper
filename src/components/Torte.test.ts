import { expect, test } from "vite-plus/test";
import { STUFEN, breite, gesamtbreite, kreisStuecke, satz, umgelegt, zahl } from "./Torte.ts";

test("the width approaches π from below", () => {
  for (const n of STUFEN) expect(breite(n)).toBeLessThan(Math.PI);
  expect(breite(32)).toBeGreaterThan(breite(16));
  expect(zahl(breite(4), 3)).toBe("2,828");
  expect(zahl(breite(8), 3)).toBe("3,061");
  expect(zahl(breite(16), 3)).toBe("3,121");
  expect(zahl(breite(32), 3)).toBe("3,137");
});

test("n pieces, alternately up and down, in both views", () => {
  for (const n of STUFEN) {
    expect(kreisStuecke(n, 50, 0, 0)).toHaveLength(n);
    const u = umgelegt(n, 50, 0, 100);
    expect(u).toHaveLength(n);
    expect(u.filter((s) => s.hoch)).toHaveLength(n / 2);
  }
});

test("the laid-out width and the sentence", () => {
  expect(gesamtbreite(4, 100)).toBeCloseTo(5 * 100 * Math.sin(Math.PI / 4), 10);
  expect(satz(8, "{n} Stücke: {b}")).toBe("8 Stücke: 3,061");
});
