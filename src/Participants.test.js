import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participants';
import renderer from 'react-test-renderer';


describe('Messages component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    
    ReactDOM.render(<Participant />, div);
    
    ReactDOM.unmountComponentAtNode(div);
  });
});