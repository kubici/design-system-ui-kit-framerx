
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom26_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m6.8 2c-2.6 0-4.8 2.2-4.8 4.8 0 1.4 0.6 2.7 1.6 3.6v36.4c0 1.8 1.4 3.2 3.2 3.2 1.8 0 3.2-1.4 3.2-3.2v-36.4c1-0.9 1.6-2.2 1.6-3.6 0-2.6-2.2-4.8-4.8-4.8z m42 8.6c-12.6 6.6-21.1-4.7-33-0.4-0.6 0.2-1 0.8-1 1.5v20.6c0 1 1 1.8 2.1 1.5 11.4-3.4 19.9 7.3 32.3 0.5 0.5-0.2 0.8-0.8 0.8-1.4v-21.5c0-0.7-0.6-1.1-1.2-0.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom26_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
