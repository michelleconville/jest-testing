/**
 * @jest-environment jsdom
 */

/* we're going to load the index.html file into Jests mock DOM, set up the DOM, this is for every html file, rember to check the html file name */

const { game } = require("../game");

beforeAll(() => {
    let fs = require("fs"); /* fs library */
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
});
