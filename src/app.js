
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from 'act/character';
import VirtualList from 'libs/VirtualList/';
import List from 'cmp/List';

export default () => {
    const dispatch = useDispatch();
    const { characters, charactersErr } = useSelector(state => (state.characterReducer));

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    if (charactersErr){
        return 'Error pls reload page'
    }
  
    return (
        <div>
            {characters.length > 0 && 
            <LazyList
                items={characters}
                itemHeight={250}
            />}
        </div>   
    )
}

const LazyList = VirtualList()(List);
