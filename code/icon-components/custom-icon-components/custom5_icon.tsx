
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom5_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m78.8 25.5c-10.2-3.9-22.1-4.8-32.5-1.4-9.3 3.1-18.8 10-20.2 20.4-0.3 2.2-0.2 4.5 0.3 6.6 0.2 1.1 0.6 2.2 1 3.3 0.2 0.6 0.4 1.1 0.7 1.6l-1.2 1.8c-2.9 4.5-4.9 9.6-6.1 14.8-0.5 2.2-1.7 5.4 0.6 7 0.9 0.6 2.2 0.6 3.1 0.1 1.2-0.7 1.4-1.9 1.6-3.2 0.9-5.3 2.7-10.6 5.6-15.1 1.4-2.2 2.9-4.4 4.6-6.4 1.5-1.6 3.7-4.7 6.2-3.8 2.5 0.9 2.4 3.8 0.7 5.3s-3.1 3.1-3.1 5.5c0 1.8 0.8 3.6 2.3 4.8 2 1.6 6 2 8.4 1.8 5.3-0.3 9.6-1.9 13.9-5 5.6-3.9 7.8-10.7 8.9-17.2 0.7-4 1.2-8 2.6-11.8 0.6-1.6 1.4-3.2 2.3-4.6 0.4-0.7 1.2-1.5 1.4-2.3 0.3-1-0.3-1.9-1.1-2.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom5_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
