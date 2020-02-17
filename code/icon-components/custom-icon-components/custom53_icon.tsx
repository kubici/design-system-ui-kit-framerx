
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom53_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m74.7 57h-0.6c-2.3 0-4.1-1.8-4.1-4.1v-13.2c0-11.6-10.4-20.9-22.3-19.5-10.2 1.1-17.7 10-17.7 20.3v11.9c0 2.5-2.1 4.6-4.6 4.6h-0.1c-1.8 0-3.3 1.5-3.3 3.3v2.4c0 1.8 1.5 3.3 3.3 3.3h49.4c1.8 0 3.3-1.5 3.3-3.3v-2.4c0-1.8-1.5-3.3-3.3-3.3z m-18.1 15h-13.2c-0.8 0-1.5 0.6-1.3 1.4 0.7 3.8 4 6.6 8 6.6s7.2-2.7 8-6.6c0-0.8-0.6-1.4-1.5-1.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom53_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
