import { describe, expect, it } from "vite-plus/test";
import { STUFEN, eckenAussen, eckenInnen, punkte, satz, schranken, zahl } from "./Vieleck.ts";

describe("Vieleck", () => {
  it("encloses π for every step", () => {
    for (const n of STUFEN) {
      const { innen, aussen } = schranken(n);
      expect(innen).toBeLessThan(Math.PI);
      expect(aussen).toBeGreaterThan(Math.PI);
    }
  });

  it("hexagon bounds are 3 and 2·√3", () => {
    const { innen, aussen } = schranken(6);
    expect(innen).toBeCloseTo(3, 10);
    expect(aussen).toBeCloseTo(2 * Math.sqrt(3), 10);
  });

  it("bounds get closer with more corners", () => {
    const breite = STUFEN.map((n) => schranken(n).aussen - schranken(n).innen);
    for (let i = 1; i < breite.length; i++) expect(breite[i]!).toBeLessThan(breite[i - 1]!);
  });

  it("known values (rechnerisch geprüft)", () => {
    expect(zahl(schranken(12).innen, 4)).toBe("3,1058");
    expect(zahl(schranken(12).aussen, 4)).toBe("3,2154");
    expect(zahl(schranken(96).innen, 4)).toBe("3,1410");
    expect(zahl(schranken(96).aussen, 4)).toBe("3,1427");
  });

  it("corners lie on the right radii", () => {
    for (const [x, y] of eckenInnen(12)) expect(Math.hypot(x, y)).toBeCloseTo(1, 10);
    for (const [x, y] of eckenAussen(12)) expect(Math.hypot(x, y)).toBeCloseTo(1 / Math.cos(Math.PI / 12), 10);
  });

  it("formats with a decimal comma and fills the sentence", () => {
    expect(zahl(3.5, 2)).toBe("3,50");
    expect(satz(6, "{n}: {innen} und {aussen}")).toBe("6: 3,0000 und 3,4641");
    expect(punkte([[0, -1]], 10, 50, 50)).toBe("50.00,40.00");
  });
});
