
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function leave_group_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m30.3 22.1c-2-0.9-2.4-1.7-2.4-2.6 0-0.9 0.6-1.7 1.2-2.4 1.2-1.1 1.8-2.7 1.8-4.6 0.1-3.5-1.9-6.5-5.6-6.5-2.2 0-3.7 1.1-4.7 2.7 2.5 1.9 4 5.2 4 9 0 2.2-0.6 4.3-1.7 6.1-0.4 0.6-0.2 1.5 0.5 1.9 2.1 1.1 4.5 2.5 5.9 4.9 0.2 0.4 0.6 0.5 1.1 0.5h2.7c1.7 0 2.9-1.2 2.9-3.1-0.1-2.9-2.8-4.6-5.7-5.9z m-10.6 6c-2.3-1-2.6-1.9-2.6-2.9s0.6-2 1.4-2.7c1.3-1.3 2-3.1 2-5.2 0-3.9-2.3-7.3-6.3-7.3h-0.4c-4 0-6.3 3.4-6.3 7.3 0 2.1 0.7 3.9 2 5.2 0.8 0.7 1.4 1.7 1.4 2.7 0 1-0.3 1.9-2.6 2.9-3.3 1.5-6.4 3-6.5 6.1 0.2 2.2 1.7 3.8 3.6 3.8h17.4c1.9 0 3.4-1.6 3.4-3.7-0.1-3.2-3.3-4.7-6.5-6.2z"/>
	</g>
	<path d="m32 42.5v-3c0-0.8 0.7-1.5 1.5-1.5h15c0.8 0 1.5 0.7 1.5 1.5v3c0 0.8-0.7 1.5-1.5 1.5h-15c-0.8 0-1.5-0.7-1.5-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(leave_group_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
