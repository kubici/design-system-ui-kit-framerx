
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function unlock_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m10 18.1v0.4-0.4z m32 4.9h-26v-4.7c0-5.3 4-10 9.3-10.3 4.9-0.3 9 2.8 10.3 7.2 0.1 0.4 0.5 0.8 1 0.8h4.1c0.6 0 1.1-0.6 1-1.2-1.6-7.6-8.4-13.2-16.5-12.8-8.5 0.4-15 7.7-15.2 16.1v4.9c-2.2 0-4 1.8-4 4v19c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-19c0-2.2-1.8-4-4-4z m-11.4 19.7c0.2 0.6-0.3 1.3-1 1.3h-7.3c-0.7 0-1.2-0.6-1-1.3l1.8-6c-1.5-1-2.4-2.8-2-4.8 0.4-1.9 1.9-3.4 3.9-3.8 3.2-0.6 6 1.7 6 4.7 0 1.6-0.8 3.1-2.1 3.9l1.7 6z"/>
	</g>
</svg>
  );
};

addPropertyControls(unlock_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
