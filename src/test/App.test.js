import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { App } from '../components/App';

describe('<App/>', ()=>{
    test('render a single <p> tag', ()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.find('p')).toHaveLength(1);

    });

});