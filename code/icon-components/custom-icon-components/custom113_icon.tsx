
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom113_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m27.2 59h45.7c0.3 0 0.6-0.3 0.6-0.6v-31.6c0-0.7-0.5-1-1.2-1h-44.5c-0.7 0-1.4 0.3-1.4 1v31.6c0 0.3 0.4 0.6 0.8 0.6v0z m3.9-27.9c0-0.3 0.2-0.6 0.5-0.6h36.7c0.3 0 0.6 0.3 0.6 0.6v22.7c0 0.3-0.3 0.6-0.6 0.6h-36.7c-0.3 0-0.6-0.3-0.6-0.6v-22.7h0.1z"/>
		<path d="m79.5 73.3l-5.9-11.8c-0.1-0.2-0.3-0.3-0.5-0.4h-46.2c-0.2 0.1-0.4 0.2-0.5 0.4l-5.9 11.8c-0.2 0.4-0.2 0.9 0 1.3 0.3 0.3 0.6 0.6 1.1 0.6h56.8c0.4 0 0.8-0.3 1-0.7 0.2-0.3 0.2-0.8 0-1.2h0.1z m-23.5-0.7h-11.9c-0.2 0-0.3-0.1-0.3-0.2-0.1-0.1-0.1-0.2 0-0.3l1.7-3.3c0.1-0.2 0.3-0.3 0.5-0.3h8c0.2 0 0.4 0.1 0.5 0.2l1.7 3.4c0.1 0.2 0 0.5-0.2 0.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom113_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
