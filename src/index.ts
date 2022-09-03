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
    if (i < 0 || i > this.Masu.length) {
      return false;
    }
    if (j < 0 || j > this.Masu[0].length) {
      return false;
    }
    return true;
  };

  moveRoop = (i: number, j: number): any => {
    const s = String(i) + "|" + String(j);
    if (this.AlreadyPathMasu[s]) {
      return [-1];
    }
    this.AlreadyPathMasu[s] = 1;
    const [dx, dy] = this.judeNextDirection(this.Masu[i][j]);
    const x = i + dx;
    const y = j + dy;
    if (!this.isNext(x, y)) {
      return [i, j];
    }
    return this.moveRoop(x, y);
  };

  getResultPosition = () => {
    return this.moveRoop(0, 0);
  };
}
