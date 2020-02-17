
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom39_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m36.9 8.9c-0.2-0.6-0.9-1-1.5-0.9l-32.3 10.4c-0.8 0.2-1.2 1.1-1 1.9l1.3 5c0.2 0.8 1 1.4 1.8 1.2l8.2-1.1c0.2 0.9 0.6 1.8 1.2 2.5l-7 18.9c-0.5 1.2 0.1 2.6 1.4 3 0.2 0.1 0.6 0.2 0.8 0.2 1 0 1.9-0.6 2.2-1.6l6.6-17.9c0.6 0.2 1 0.2 1.6 0.2s1.1-0.1 1.6-0.2l6.6 17.9c0.3 1 1.3 1.6 2.2 1.6 0.2 0 0.6-0.1 0.8-0.2 1.3-0.5 1.9-1.8 1.4-3.1l-7-19c0.9-1.2 1.4-2.7 1.4-4.3v-0.1l11.3-1.6c0.7-0.1 1.2-0.8 1-1.5l-2.6-11.3z m13 11.3l-4.4-16.4c-0.3-1.3-1.7-2.1-3-1.8-1.3 0.3-2.1 1.7-1.8 3l4.4 16.3c0.3 1.3 1.7 2.1 3 1.8 1.3-0.3 2.1-1.7 1.8-2.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom39_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
