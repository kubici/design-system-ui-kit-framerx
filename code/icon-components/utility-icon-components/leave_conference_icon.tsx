
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function leave_conference_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m25.7 22.4c-0.5 0.7-0.2 1.7 0.6 2.2 1.6 0.9 3.4 1.9 4.9 3.3 2.5-1.9 5.5-3 8.8-3.2-1.1-1.9-3.4-3.2-5.8-4.3-2.3-1-2.8-1.9-2.8-3 0-1 0.7-1.9 1.4-2.8 1.4-1.3 2.1-3.1 2.1-5.3 0.1-4-2.2-7.5-6.4-7.5-2.5 0-4.2 1.3-5.4 3.1 2.9 2.2 4.6 6 4.6 10.3-0.1 2.8-0.8 5.2-2 7.2z m6.1 12.3l6 6-6 6c-0.6 0.6-0.6 1.6 0 2.1l0.7 0.7c0.6 0.6 1.6 0.6 2.1 0l6-6 6 6c0.6 0.6 1.6 0.6 2.1 0l0.7-0.7c0.6-0.6 0.6-1.6 0-2.1l-6-6 6-6c0.6-0.6 0.6-1.6 0-2.1l-0.7-0.7c-0.6-0.6-1.6-0.6-2.1 0l-6 6-6-6c-0.6-0.6-1.6-0.6-2.1 0l-0.7 0.7c-0.5 0.5-0.5 1.5 0 2.1z m-3.6-4c-1.4-1.4-3.5-2.3-5.6-3.3-2.6-1.1-3-2.2-3-3.3 0-1.1 0.7-2.3 1.6-3.1 1.5-1.5 2.3-3.6 2.3-6 0-4.5-2.6-8.4-7.2-8.4h-0.5c-4.6 0-7.2 3.9-7.2 8.4 0 2.4 0.8 4.5 2.3 6 0.9 0.8 1.6 1.9 1.6 3.1 0 1.1-0.3 2.2-3 3.3-3.8 1.7-7.3 3.4-7.5 7 0.2 2.5 1.9 4.4 4.1 4.4h18.6c0.5-3.1 1.7-5.9 3.5-8.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(leave_conference_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
