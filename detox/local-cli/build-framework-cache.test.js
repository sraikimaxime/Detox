// TODO: check if we can test the entire thing, so that we test the integration with yargs
const handler = require("./build-framework-cache").handler;
jest.mock("child_process");
const cp = require("child_process");

describe("build-framework-cache", () => {
  it("executes shell script", () => {
    handler()
    expect(cp.execSync).toHaveBeenCalledWith(expect.stringContaining("scripts/build_framework.ios.sh"), expect.any(Object));
  });
});
