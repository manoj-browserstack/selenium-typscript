const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");

describe("BStack demo test", () => {
  let driver: { quit: () => any; get: (arg0: string) => any; wait: (arg0: any, arg1: number | undefined) => any; findElement: (arg0: any) => { (): any; new(): any; click: { (): any; new(): any; }; sendKeys: { (arg0: string, arg1: any): any; new(): any; }; getText: { (): any; new(): any; }; }; };

  beforeAll(() => {
    driver = new Builder()
      .usingServer(`http://localhost:4444/wd/hub`)
      .withCapabilities(Capabilities.chrome())
      .build();
  });
  
  afterAll(async () => {
    await driver.quit();
  })
  
  test("login test", async () => {
    await driver.get("https://bstackdemo.com");
    await driver.wait(until.titleMatches(/StackDemo/i), 10000);

  }, 1000000);
});
