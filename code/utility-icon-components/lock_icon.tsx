
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function lock_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m11 19h4c0.6 0 1-0.3 1-0.9v-0.1c0-5.7 4.9-10.4 10.7-10 5.3 0.4 9.3 5 9.3 10.4v-0.3c0 0.6 0.4 0.9 1 0.9h4c0.6 0 1-0.3 1-0.9v-0.1c0-9.1-7.6-16.4-16.8-16-8.5 0.4-15 7.6-15.2 16.1 0.1 0.5 0.5 0.9 1 0.9z m-1-0.9v0.4-0.4z m36 8.9c0-2.2-1.8-4-4-4h-32c-2.2 0-4 1.8-4 4v19c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-19z m-15.4 15.7c0.2 0.6-0.3 1.3-1 1.3h-7.3c-0.7 0-1.1-0.6-1-1.3l1.8-6c-1.5-1-2.4-2.8-2.1-4.8 0.4-1.9 1.9-3.4 3.9-3.8 3.2-0.6 6 1.7 6 4.7 0 1.6-0.8 3.1-2.1 3.9l1.8 6z"/>
	</g>
</svg>
  );
};

addPropertyControls(lock_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  