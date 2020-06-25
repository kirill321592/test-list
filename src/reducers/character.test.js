import { characterReducer, initialState } from "./character";

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


describe('characters reducer', () => { 

    it('SUCCESS_CHARACTERS', () => { 
        const action = {
            type: 'SUCCESS_CHARACTERS',
             payload: results,
        }
        expect(characterReducer(initialState, action)).toEqual({
            charactersErr: false,
            characters: action.payload,
        })
    })
    it('FAIL_CHARACTERS', () => {
        const action = {
            type: 'FAIL_CHARACTERS',
            payload: {},
        }
        expect(characterReducer(initialState, action)).toEqual({
            charactersErr: true,
            characters: [],
        })
    })
})
