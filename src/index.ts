export class BeltConveyor {
  private Masu: string[][];

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

  getResultPosition = () => {
    return [0, 2];
  };
}
