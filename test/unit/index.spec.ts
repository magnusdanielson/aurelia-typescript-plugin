import { configure } from '../../src/index';

describe('Index', () => {
    let sut;

    beforeEach(() => {
        sut = configure();
    });

    it('Placeholder test', () => {
        expect(1).toEqual(jasmine.any(Number));
        expect('test').toEqual('test');
        expect(false).toBeFalsy();
    });

    afterEach(() => {

    });
});
