
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function people_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m42 22.3c-2.8-1.1-3.2-2.2-3.2-3.3s0.8-2.2 1.8-3c1.7-1.4 2.6-3.5 2.6-5.8 0-4.4-2.9-8.2-8-8.2-4.7 0-7.5 3.2-7.9 7.1 0 0.4 0.2 0.7 0.5 0.9 3.8 2.4 6.1 6.6 6.1 11.7 0 3.8-1.5 7.2-4.2 9.6-0.2 0.2-0.2 0.6 0 0.8 0.7 0.5 2.3 1.2 3.3 1.7 0.3 0.1 0.5 0.2 0.8 0.2h12.1c2.3 0 4.1-1.9 4.1-4v-0.6c0-3.5-3.8-5.4-8-7.1z m-13.4 13.9c-3.4-1.4-3.9-2.6-3.9-3.9 0-1.3 1-2.6 2.1-3.6 2-1.7 3.1-4.1 3.1-6.9 0-5.2-3.4-9.7-9.6-9.7-6.1 0-9.6 4.5-9.6 9.7 0 2.8 1.1 5.2 3.1 6.9 1.1 1 2.1 2.3 2.1 3.6 0 1.3-0.5 2.6-4 3.9-5 2-9.9 4.3-9.9 8.5v1.3c0 2.2 1.8 4 4.1 4h27.7c2.3 0 4.2-1.8 4.2-4v-1.4c0-4.1-4.4-6.4-9.4-8.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(people_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  