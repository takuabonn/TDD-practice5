interface AlreadyPathMasu {
  [key: string]: number;
}
export class BeltConveyor {
  private Masu: string[][];
  private AlreadyPathMasu: AlreadyPathMasu = {};

  constructor(masu: string[][]) {
    this.Masu = masu;
  }

  judeNextDirection = (s: string): number[] => {
    if (s === "R") return [0, 1];
    if (s === "D") return [1, 0];
    if (s === "U") return [-1, 0];
    if (s === "L") return [0, -1];

    return [0, 0];
  };

  private isNext = (i: number, j: number) => {
    if (i < 0 || i > this.Masu.length - 1) {
      return false;
    }
    if (j < 0 || j > this.Masu[0].length - 1) {
      return false;
    }
    return true;
  };

  moveRoop = (i: number, j: number): number[] => {
    let result: number[] = [];
    let I = i;
    let J = j;
    while (!result.length) {
      const s = String(I) + "|" + String(J);
      if (this.AlreadyPathMasu[s]) {
        result = [-1];
      }
      this.AlreadyPathMasu[s] = 1;
      const [di, dj] = this.judeNextDirection(this.Masu[I][J]);
      const newI = I + di;
      const newJ = J + dj;
      if (!this.isNext(newI, newJ)) {
        result = [I + 1, J + 1];
      }
      I = newI;
      J = newJ;
    }
    return result;
  };

  getResultPosition = () => {
    return this.moveRoop(0, 0);
  };
}
