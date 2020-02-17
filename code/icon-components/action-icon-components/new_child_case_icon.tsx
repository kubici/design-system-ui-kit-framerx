
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_child_case_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m15 11h4c0.6 0 1-0.4 1-1v-2h10v2c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-2.5c0-3-2.5-5.5-5.5-5.5h-11.1c-3 0-5.4 2.4-5.4 5.4v2.6c0 0.6 0.4 1 1 1z m17 23h2v-2c0-2.2 1.8-4 4-4h6c1.3 0 2.4 0.6 3.1 1.5 0.3 0.4 0.9 0.1 0.9-0.3v-10.2c0-2.2-1.8-4-4-4h-38c-2.2 0-4 1.8-4 4v23c0 2.2 1.8 4 4 4h21.8c0.4 0 0.6-0.3 0.5-0.7-0.2-0.4-0.3-0.8-0.3-1.3v-6c0-2.2 1.8-4 4-4z m16.5 4h-4.5v-4.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v4.5h-4.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h4.5v4.5c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-4.5h4.5c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_child_case_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
