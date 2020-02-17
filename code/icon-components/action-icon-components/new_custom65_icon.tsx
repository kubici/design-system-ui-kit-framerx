
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom65_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m42.4 38.7h-38.9c-0.8 0-1.5 0.7-1.5 1.5v0.1c0 2.6 2.1 4.7 4.7 4.7h32.6c2.6 0 4.7-2.1 4.7-4.8v-0.1c-0.1-0.7-0.8-1.4-1.6-1.4z m-1.6-31.7h-37.2c-0.7 0-1.4 0.7-1.4 1.6-0.2 2.1-0.2 5.9 0.1 8.2 1 7.4 4.9 13.6 10.2 16.9 0.2 0.2 0.5 0.2 0.8 0.2h16.2c0.3 0 0.5-0.1 0.8-0.2 3-1.9 5.7-4.8 7.4-8.2 0.9 0.3 1.9 0.5 3 0.5 5.1 0 9.3-4.3 9.3-9.5s-4.1-9.5-9.2-9.5z m0 14.2c-0.4 0-0.8-0.1-1.2-0.2 0.8-2.5 1.2-5.2 1.2-8.1v-1.3c2.6 0 4.7 2.1 4.7 4.8s-2.2 4.8-4.7 4.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom65_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
