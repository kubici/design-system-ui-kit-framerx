
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function reset_password_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m42 23h-32c-2.2 0-4 1.8-4 4v19c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-19c0-2.2-1.8-4-4-4z m-11 21.5c-1.5 1-3.2 1.5-5 1.5-0.6 0-1.2-0.1-1.8-0.2-2.4-0.5-4.4-1.8-5.7-3.8l3.3-2.2c0.7 1.1 1.9 1.9 3.2 2.1 1.3 0.3 2.6 0 3.8-0.8 2.3-1.5 2.9-4.7 1.4-6.9-0.7-1.1-1.9-1.9-3.2-2.1-1.3-0.3-2.6 0-3.8 0.8-0.3 0.2-0.5 0.4-0.7 0.6l3.5 3.5h-9v-9l2.6 2.6c0.4-0.4 0.9-0.8 1.3-1.1 2-1.3 4.4-1.8 6.8-1.4 2.4 0.5 4.4 1.8 5.7 3.8 2.8 4.2 1.7 9.8-2.4 12.6z m-21-26.4v0.4-0.4z m1 0.9h4c0.6 0 1-0.3 1-0.9v-0.1c0-5.7 4.9-10.4 10.7-10 5.3 0.4 9.3 5 9.3 10.4v-0.3c0 0.6 0.4 0.9 1 0.9h4c0.6 0 1-0.3 1-0.9v-0.1c0-9.1-7.6-16.4-16.8-16-8.5 0.4-15 7.6-15.2 16.1 0.1 0.5 0.5 0.9 1 0.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(reset_password_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
