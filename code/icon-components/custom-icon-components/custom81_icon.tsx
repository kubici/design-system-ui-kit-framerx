
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom81_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m76.9 20c-1 0-3.9 0.1-4.9 0.1-15.4 0.8-33.1 4.6-34 4.9-1.2 0.4-2 1.6-2 2.8v32.6c-1-0.4-2.6-0.6-4-0.6-6.6 0-12 4.5-12 10s5.4 10 12 10 12-4.5 12-10v-20.4c0-0.9 0.6-1.7 1.5-1.9 4.9-1.2 11.7-2.5 24.4-3.3 1.2-0.1 2.1 0.8 2.1 2v10.3c-1-0.4-2.6-0.6-4-0.6-6.6 0-12 4.5-12 10s5.4 10 12 10 12-4.5 12-10v-42.9c0-1.7-1.4-3.1-3.1-3z m-6.8 15.8c-12.2 0.7-18.4 1.9-23.7 3.1-1.3 0.3-2.4-0.7-2.4-2v-3.1c0-0.9 0.6-1.7 1.6-2 5.2-1.2 11.5-2.5 24.3-3.3 1.2-0.1 2.1 0.8 2.1 2v3.2c0 1.2-0.8 2.1-1.9 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom81_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
