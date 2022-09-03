export class BeltConveyor {
  private Masu: string[][];

  constructor(masu: string[][]) {
    this.Masu = masu;
  }

  judeNextDirection = (): number[] => {
    return [0, 1];
  };
}
