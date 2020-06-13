
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function yubi_key_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m38.5 14.1h-37c-0.8 0-1.5 0.7-1.5 1.5v21c0 0.8 0.7 1.5 1.5 1.5h37c0.8 0 1.5-0.7 1.5-1.5v-21c0-0.8-0.7-1.5-1.5-1.5z m-17.5 18.1c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1 6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1z"/>
		<path d="m50.5 18h-14.5c-0.8 0-1.5 0.7-1.5 1.5v13c0 0.8 0.7 1.5 1.5 1.5h14.5c0.8 0 1.5-0.7 1.5-1.5v-13c0-0.8-0.7-1.5-1.5-1.5z m-3.4 4c0.6 0 1 0.4 1 1v1.9h-8.1v-2.9h7.1z m0 8h-7.1v-2.7h8.1v1.7c0 0.6-0.4 1-1 1z"/>
		<circle cx="21" cy="26.1" r="1.2"/>
	</g>
</svg>
  );
};

addPropertyControls(yubi_key_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  