const nodeClasses = require("../Project1");

describe('stack node unit tests', () => {
    var stackNode;

    beforeEach(() => {
        stackNode = new nodeClasses.StackNode();
    });
    
    it('push (normal case)', () => {
        stackNode.push(1);
        expect(stackNode.size).toBe(1);
        expect(stackNode.top.data).toBe(1);
    });

    it('push (TypeError case)', () => {
        expect(() => stackNode.push("cat")).toThrow(TypeError);
    });

    it('pop (empty case)', () => {
        var actual = stackNode.pop();
        expect(actual).toBe(-1);
        expect(stackNode.size).toBe(0);
    });

    it('pop (not empty case)', () => {
        stackNode.top = new nodeClasses.Node(1);
        stackNode.size++;
        var actual = stackNode.pop();
        expect(actual).toBe(1);
        expect(stackNode.size).toBe(0);
    });

    it('peek (empty case)', () => {
        var actual = stackNode.peek();
        expect(actual).toBe(-1);
        expect(stackNode.size).toBe(0);
    });

    it('peek (not empty case)', () => {
        stackNode.top = new nodeClasses.Node(69);
        stackNode.size++;
        var actual = stackNode.peek();
        expect(actual).toBe(69);
        expect(stackNode.size).toBe(1);
    });

    it("display (empty case)", () => {
        const logSpy = jest.spyOn(global.console, 'log').mockImplementation(() => {});
        stackNode.display();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith("Stack is Empty.");
    });

    it('display (one value case)', () => {
        stackNode.top = new nodeClasses.Node(4);
        stackNode.size++;
        const logSpy = jest.spyOn(global.console, 'log');
        stackNode.display();
        expect(logSpy).toHaveBeenLastCalledWith("Stack Elements: 4 ");
    });

    it('display (two values case)', () => {
        const topNode = new nodeClasses.Node(4);
        topNode.next = new nodeClasses.Node(10);
        stackNode.top = topNode;
        stackNode.size = 2;
        const logSpy = jest.spyOn(global.console, 'log');
        stackNode.display();
        expect(logSpy).toHaveBeenLastCalledWith("Stack Elements: 4 10 ");
    });
});
