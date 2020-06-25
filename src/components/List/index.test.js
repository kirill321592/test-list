import React from 'react';
import List from './';
import { shallow } from "enzyme";

describe('component renders a list', () => {

    const virtual = {
        items:[
            {
                id: 3,
                name: "item14"
            },
            {
                id: 4,
                name: "item5"
            },
        
        ]
    }
    const itemHeight =250;  

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <List
                itemHeight={itemHeight}
                virtual={virtual} />
        );
    });

    it('renders 2 items', () => {
        expect(wrapper.find('li').length).toBe(2);
    });
});  