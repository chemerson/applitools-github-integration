# applitools-github-integration

Changers available in the applitool config file to create diffs.

    async function evalChange(driver, change) {
      const path = "scripts/changers/";
      switch (change) {
        case 1:
          await driver.executeScript(rFile(path + "align-center.js"));
          break;
        case 2:
          await driver.executeScript(rFile(path + "change-bg-color.js"));
          break;
        case 3:
          await driver.executeScript(rFile(path + "change-margin.js"));
          break;
        case 4:
          await driver.executeScript(rFile(path + "remove-element.js"));
          break;
        case 5:
          await driver.executeScript(rFile(path + "replace-value.js"));
          break;
        case 6:
          await driver.executeScript(rFile(path + "skew-page.js"));
          break;
        default:
      }
    }
