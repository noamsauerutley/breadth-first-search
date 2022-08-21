const bst = require("../breadthFirstSearch");

describe("Test Breadth First Search", () => {
    test("Found the searching string", () => {
        const result = bst.BreadthFirstSearch(bst.InputTree, bst.InputTree["10"], "18");
        expect(result).toBe(true);
    });
    test("Not found the searching string", () => {
        const result = bst.BreadthFirstSearch(bst.InputTree, bst.InputTree["10"], "20");
        expect(result).toBe(false);
    });
});