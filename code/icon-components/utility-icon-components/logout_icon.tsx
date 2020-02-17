
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function logout_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m21 48.5v-3c0-0.8-0.7-1.5-1.5-1.5h-10c-0.8 0-1.5-0.7-1.5-1.5v-33c0-0.8 0.7-1.5 1.5-1.5h10c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-13.5c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h13.5c0.8 0 1.5-0.7 1.5-1.5z m28.6-21.5c0.6-0.6 0.6-1.5 0-2.1l-13.5-13.5c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l5.6 5.6c0.6 0.6 0.2 1.7-0.7 1.7h-21.3c-0.8 0-1.5 0.6-1.5 1.4v3c0 0.8 0.7 1.6 1.5 1.6h21.2c0.9 0 1.3 1.1 0.7 1.7l-5.6 5.6c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l13.6-13.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(logout_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
