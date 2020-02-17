
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function desktop_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m50 6c0-2.2-1.8-4-4-4h-40c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-26z m-6 22.5c0 0.8-0.7 1.5-1.5 1.5h-33c-0.8 0-1.5-0.7-1.5-1.5v-19c0-0.8 0.7-1.5 1.5-1.5h33c0.8 0 1.5 0.7 1.5 1.5v19z m-11 15.5h-3c-0.6 0-1-0.4-1-1v-2c0-0.6-0.4-1-1-1h-4c-0.6 0-1 0.4-1 1v2c0 0.6-0.4 1-1 1h-3c-2.2 0-4 1.8-4 4v0.5c0 0.8 0.7 1.5 1.5 1.5h19c0.8 0 1.5-0.7 1.5-1.5v-0.5c0-2.2-1.8-4-4-4z"/>
	</g>
</svg>
  );
};

addPropertyControls(desktop_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
