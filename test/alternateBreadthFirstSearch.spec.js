const bst = require("../alternateBreadthFirstSearch");

describe("Test Breadth First Search", () => {
    test("Found the searching string", () => {
        const result = bst.alternateBreadthFirstSearch(bst.InputTree, bst.InputTree["10"], "18");
        console.log(result);
        expect(result.length).toBe(7);
    });
    test("Not found the searching string", () => {
        const result = bst.alternateBreadthFirstSearch(bst.InputTree, bst.InputTree["10"], "20");
        expect(result.length).toBe(0);
    });
});
