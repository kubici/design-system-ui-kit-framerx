
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function identity_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m46 8h-11.1s0.1 0.7 0.1 1c0 3.9-3.1 7-7 7h-6c-3.9 0-7-3.1-7-7 0-0.3 0-1 0.1-1h-9.1c-2.2 0-4 1.8-4 4v30c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-30c0-2.2-1.8-4-4-4z m-24.3 30h-11.4c-1.3 0-2.3-1.2-2.3-2.5 0-2 2.1-3.1 4.3-4 1.5-0.6 1.7-1.2 1.7-1.9 0-0.6-0.4-1.2-0.9-1.7-0.9-0.8-1.4-2-1.4-3.3 0-2.5 1.5-4.6 4.2-4.6s4.2 2.1 4.2 4.6c0 1.3-0.5 2.5-1.4 3.3-0.5 0.5-0.9 1.1-0.9 1.7 0 0.6 0.2 1.2 1.7 1.9 2.2 0.9 4.3 2 4.3 4 0.2 1.3-0.8 2.5-2.1 2.5z m22.3-4c0 0.6-0.4 1-1 1h-14c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v2z m2-8c0 0.6-0.4 1-1 1h-16c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h16c0.6 0 1 0.4 1 1v2z m-24-14h6c1.7 0 3-1.3 3-3s-1.3-3-3-3h-6c-1.7 0-3 1.3-3 3s1.3 3 3 3z"/>
	</g>
</svg>
  );
};

addPropertyControls(identity_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
