import { createActions } from 'redux-actions';

export const { getCharacters, successCharacters, failCharacters } = createActions({
    GET_CHARACTERS: () => ({}),
    SUCCESS_CHARACTERS: ({ results }) => results,
    FAIL_CHARACTERS: () => ({})
});