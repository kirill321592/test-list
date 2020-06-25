import { getCharacters, successCharacters, failCharacters } from './character';

describe('actions', () => {
    it('should create an action GET_CHARACTERS', () => {
        const expectedGet = {
            type: 'GET_CHARACTERS',
            payload: { },
        };
        
        expect(getCharacters()).toEqual(expectedGet);
    });
    it('should create an action to SUCCESS_CHARACTERS', () => {
        const results = [
            {
                id: 3,
                name: "item14"
            },
            {
                id: 4,
                name: "item5"
            },
        ];

        const expectedSucces = {
            type: 'SUCCESS_CHARACTERS',
            payload: results,
        }

        expect(successCharacters({results})).toEqual(expectedSucces);
    });
    it('should create an action FAIL_CHARACTERS', () => {
        const expectedFail = {
            type: 'FAIL_CHARACTERS',
            payload: {},
        };

        expect(failCharacters()).toEqual(expectedFail);
    });
});