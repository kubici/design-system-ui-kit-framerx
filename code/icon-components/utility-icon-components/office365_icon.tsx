
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function office365_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m6 40.6z" fill={props.fill}/>
	<g fill={props.fill}>
		<path d="m6.1 41 0 0"/>
		<path d="m30.8 49.5c0.6 0.2 1.3 0.2 1.9 0l11.9-3.9c0.8-0.3 1.4-1 1.4-1.9v-36c0-0.6-0.4-1.2-1-1.4l-12.1-4.1c-0.7-0.2-1.4-0.2-2 0l-23.9 9.2c-0.6 0.2-1 0.8-1 1.4v27.1c0 0.6 0.4 1.2 1 1.4l23.8 8.2z m1.2-6.7c0 0.6-0.5 1.1-1 1l-20-2.7c-0.5-0.1-0.9-0.5-0.9-1v-0.4c0-0.4 0.2-0.7 0.7-0.9l3.8-1.8c0.4-0.2 0.6-0.5 0.6-0.9v-21.3c0-0.5 0.3-0.9 0.8-1l15-3.4c0.6-0.1 1.2 0.3 1.2 1v31.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(office365_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
