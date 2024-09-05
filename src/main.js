import { Builder, By, Key } from "selenium-webdriver";

async function example() {
  // Launch the chrome browser
  const driver = await new Builder().forBrowser("chrome").build();

  // Navigate to the application
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  // Add todo task
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Last to-do", Key.ENTER);

  // Close the browser
  await driver.quit();
}

example();
