
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function notification_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m46 33h-0.5c-1.9 0-3.5-1.6-3.5-3.5v-11.5c0-9.1-7.6-16.4-16.8-16-8.6 0.4-15.2 7.8-15.2 16.5v11.1c0 1.9-1.6 3.4-3.5 3.4h-0.5c-2.2 0-4 1.9-4 4.1v1.5c0 0.7 0.7 1.4 1.5 1.4h45c0.8 0 1.5-0.7 1.5-1.5v-1.5c0-2.2-1.8-4-4-4z m-15.1 11h-9.8c-0.6 0-1.1 0.6-1 1.2 0.5 2.8 3 4.8 5.9 4.8s5.4-2.1 5.9-4.8c0.1-0.6-0.4-1.2-1-1.2z"/>
	</g>
</svg>
  );
};

addPropertyControls(notification_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
