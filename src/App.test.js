import React from 'react';
import ReactDOM from 'react-dom';
import HeyHoApp from './App';

it('renders without crashing', () => {
  
  const div = document.createElement('div');
  ReactDOM.render(<HeyHoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
