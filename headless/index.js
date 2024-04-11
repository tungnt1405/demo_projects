const puppeteer = require("puppeteer");
const { passJetpackProtected } = require("./utils/inoxmatop");

(async () => {
    console.time("Create post");
    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    await page.goto("https://example.com/login");
    await page.type("#user_login", "xxxx");
    await page.type("#user_pass", "xxxxxxx");
    const regex_number = /[0-9\+\-\*\/]/g;
    const math_protected_selector = await page.waitForSelector(
        'label[for="jetpack_protect_answer"]'
    );
    const content_math = await math_protected_selector?.evaluate(
        (el) => el.textContent
    );
    const arr_number_protected = content_math.match(regex_number);
    let result_math_protected =
        passJetpackProtected(arr_number_protected).toString();

    await page.type("#jetpack_protect_answer", result_math_protected);
    const btnLogin = "#wp-submit";
    // await page.waitForSelector(btnLogin);
    await page.click(btnLogin);

    await page.waitForNavigation();

    await page.goto("https://example.com/post-new.php");
    await page.type("input#title", new Date().toDateString());
    await page.click("input#publish");
    // const cookies = await page.cookies();
    await page.waitForNavigation();
    // console.log("cookies", cookies);
    console.timeEnd("Create post");
    await browser.close();
})();
