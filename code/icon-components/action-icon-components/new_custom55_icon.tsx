
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom55_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m12.5 33.3h9.8c0.8 0 1.5-0.7 1.5-1.5v-21.9c0-1.6-1.5-2.9-3-2.9h-8c-1 0-1.7 0.7-1.7 1.7v23.2c-0.1 0.7 0.6 1.4 1.4 1.4z m33-21.9v23.4c0 1.6-1.4 2.9-3 2.9h-33c-1.7 0-3-1.3-3-2.9v-23.4c-2.5 0-4.5 2-4.5 4.4v21.9c0 2.4 2 4.4 4.5 4.4h14.2c0.8 0 1.5 0.7 1.5 1.5s0.7 1.5 1.5 1.5h4.5c0.8 0 1.5-0.7 1.5-1.5s0.7-1.5 1.5-1.5h14.2c2.5 0 4.5-2 4.5-4.4v-21.9c0.1-2.4-1.9-4.4-4.4-4.4z m-15.7 21.9h9.5c1 0 1.7-0.7 1.7-1.7v-23.1c0-0.8-0.7-1.5-1.5-1.5h-8.2c-1.5 0-3 1.3-3 2.9v21.9c-0.1 0.8 0.6 1.5 1.5 1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom55_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
