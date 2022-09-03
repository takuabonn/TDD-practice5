import { BeltConveyor } from "../src";

describe("マスを移動できなくなるまで移動して最終のマス目を返す", () => {
  describe("マス目を(0,0)から移動条件に当てはまる場合そのの方向に移動する", () => {
    const A = [
      ["R", "D", "U"],
      ["L", "R", "U"],
    ];
    test("(0,0)がRの場合に現在のマスが(0,1)になる", () => {
      const beltConveyor = new BeltConveyor(A);
      const [dx, dy] = beltConveyor.judeNextDirection("R");

      expect(0 + dx).toBe(0);
      expect(0 + dy).toBe(1);
    });
    test("(0,0)がDの場合に現在のマスが(1,0)になる", () => {
      const beltConveyor = new BeltConveyor(A);
      const [dx, dy] = beltConveyor.judeNextDirection("D");

      expect(0 + dx).toBe(1);
      expect(0 + dy).toBe(0);
    });
  });
});
