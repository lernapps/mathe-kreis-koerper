import { expect, test } from "vite-plus/test";
import { STUFEN, fuellung, satz, wasserHoehe } from "./Umschuetten.ts";

test("after three pourings the cylinder is full, each pouring adds a third", () => {
  expect(STUFEN).toEqual([0, 1, 2, 3]);
  expect(fuellung(0)).toBe(0);
  expect(fuellung(1)).toBeCloseTo(1 / 3, 12);
  expect(fuellung(2)).toBeCloseTo(2 / 3, 12);
  expect(fuellung(3)).toBe(1);
  expect(fuellung(9)).toBe(1);
  expect(fuellung(-1)).toBe(0);
});

test("the water height and the sentence", () => {
  expect(wasserHoehe(3, 90)).toBe(90);
  expect(wasserHoehe(1, 90)).toBeCloseTo(30, 12);
  expect(satz(1, "{k} mal umgeschüttet, noch {rest} mal bis voll")).toBe("1 mal umgeschüttet, noch 2 mal bis voll");
  expect(satz(3, "{rest}")).toBe("0");
});
