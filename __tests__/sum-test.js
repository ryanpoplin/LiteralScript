jest.unmock('../sum');
describe('sum', () => {
    it('adds 20 + 6 to equal 3', () => {
        const sum = require('../sum');
        expect(sum(20, 6)).toBe(26);
    });
});
