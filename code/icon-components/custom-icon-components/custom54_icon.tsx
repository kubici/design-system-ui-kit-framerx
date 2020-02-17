
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom54_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m27.2 49.1c6.5-1.2 12.2-3.8 18.4-6.7 2-0.9 5.7-2.7 7.5-3.5 0.6-0.3 1-0.9 0.8-1.6-0.5-2.9-2.9-5.3-5.9-5.3h-2v-3.8c0-1.1-1-2.1-2-2.1v-4.1c0-1.1-0.9-2.1-2-2.1h-4c-1.1 0-2 0.9-2 2.1v4.1c-1 0-2 0.9-2 2.1v3.8h-2c-3.3 0-6 3.1-6 6.5v9.6c0 0.6 0.6 1.1 1.2 1z m44.8 20.1s7.3-11.4 8-27.5c0-1.2-0.9-2.2-2.1-2.2-23.8 0.9-34.9 15.5-56 16.4-1.1 0-1.9 1-1.9 2v7.6c0 3.3 2.5 5.9 5.6 6.1 10.5 0.7 33 2.2 45.9 4.3 1.3 0.2 2.5-1 2.3-2.3-0.3-1.5-0.8-3.3-1.8-4.4z m-1-18.2c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom54_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
