import { handleActions } from 'redux-actions';

export const InitailState = {
    characters: [],
    charactersErr:false
}

export const characterReducer = handleActions({
    SUCCESS_CHARACTERS: (state, { payload }) => {
        return {
            ...state,
            characters: payload
        };
    },
    FAIL_CHARACTERS: (state) => {
        return {
            ...state,
            charactersErr: true
        };
    },
}, InitailState);