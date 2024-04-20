import { Potato } from "../../src/Potato";

let potato: Potato;

describe("Potato", () => {
  beforeEach(() => {
    potato = new Potato();
  });

  test("Get Name", () => {
    potato.setName("Gabi");
    const name = potato.getName();

    expect(name).toEqual("Gabi");
  });
});
