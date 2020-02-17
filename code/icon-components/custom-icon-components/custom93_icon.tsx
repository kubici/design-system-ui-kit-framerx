
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom93_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m42.4 50h29.5c0.9 0 1.7-0.6 1.9-1.5l5.4-19c0.4-1.3-0.6-2.5-1.9-2.5h-45.6l-0.8-2.8c-0.4-1.3-1.6-2.2-2.9-2.2h-4.8c-1.6 0-3.1 1.2-3.2 2.8-0.1 1.7 1.3 3.2 3 3.2h2.8l9.4 31.8c0.4 1.3 1.5 2.2 2.9 2.2h34.8c1.6 0 3.1-1.2 3.2-2.8 0.1-1.7-1.3-3.2-3-3.2h-30.6c-1.3 0-2.5-0.9-2.8-2.1v-0.1c-0.7-1.9 0.8-3.8 2.7-3.8z"/>
		<circle cx="43" cy="73" r="5"/>
		<circle cx="67" cy="73" r="5"/>
	</g>
</svg>
  );
};

addPropertyControls(custom93_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
