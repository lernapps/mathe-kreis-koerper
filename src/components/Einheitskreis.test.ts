import { expect, test } from "vite-plus/test";
import { WINKEL, bildPunkt, bogen, bogenPfad, exakt, exaktWorte, punkt, satz, zahl } from "./Einheitskreis.ts";

test("the arc length is the angle in radians", () => {
  expect(bogen(180)).toBeCloseTo(Math.PI, 12);
  expect(bogen(360)).toBeCloseTo(2 * Math.PI, 12);
  expect(zahl(bogen(60), 3)).toBe("1,047");
  expect(zahl(bogen(90), 3)).toBe("1,571");
  expect(zahl(bogen(15), 3)).toBe("0,262");
  expect(WINKEL).toHaveLength(25);
});

test("negative numbers get the minus sign, a rounded zero has none", () => {
  expect(zahl(-0.5, 3)).toBe("\u22120,500");
  expect(zahl(-0.0000001, 3)).toBe("0,000");
  expect(zahl(1, 3)).toBe("1,000");
});

test("the exact value is grad / 180 reduced", () => {
  expect(exakt(0)).toEqual({ zaehler: 0, nenner: 1 });
  expect(exakt(30)).toEqual({ zaehler: 1, nenner: 6 });
  expect(exakt(90)).toEqual({ zaehler: 1, nenner: 2 });
  expect(exakt(225)).toEqual({ zaehler: 5, nenner: 4 });
  expect(exakt(360)).toEqual({ zaehler: 2, nenner: 1 });
  for (const w of WINKEL) {
    const { zaehler, nenner } = exakt(w);
    expect((zaehler / nenner) * Math.PI).toBeCloseTo(bogen(w), 12);
  }
  expect(exaktWorte(30)).toBe("π durch 6");
  expect(exaktWorte(360)).toBe("2 π");
  expect(exaktWorte(180)).toBe("π");
  expect(exaktWorte(0)).toBe("0");
});

test("the point on the circle and the path", () => {
  expect(punkt(90).x).toBeCloseTo(0, 12);
  expect(punkt(90).y).toBeCloseTo(1, 12);
  expect(punkt(30).y).toBeCloseTo(0.5, 12);
  expect(bildPunkt(0, 100, 150, 100)).toEqual([250, 100]);
  expect(bogenPfad(0, 100, 150, 100)).toBe("");
  expect(bogenPfad(90, 100, 150, 100)).toContain("A100,100 0 0 0");
  expect(bogenPfad(270, 100, 150, 100)).toContain("A100,100 0 1 0");
  expect(satz(60, "{grad}° ist {bogen}")).toBe("60° ist 1,047");
});
