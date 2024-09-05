import {Builder} from 'selenium-webdriver';

async function example() {
    const driver = await new Builder()
    .forBrowser('chrome')
    .build();

    await driver.get('https://lambdatest.github.io/sample-todo-app/');

}

example()