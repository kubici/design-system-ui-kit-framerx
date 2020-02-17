
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function shift_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m72 26h-5v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-18v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-5c-3.3 0-6 2.7-6 6v2c0 1.1 0.9 2 2 2h52c1.1 0 2-0.9 2-2v-2c0-3.3-2.7-6-6-6z m4 16h-52c-1.1 0-2 0.9-2 2v30c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-30c0-1.1-0.9-2-2-2z m-26 33.9c-8.2 0-14.9-6.7-14.9-14.9s6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9-6.7 14.9-14.9 14.9z m-2.3-8.8c-0.4 0-0.7-0.2-1-0.4l-5-5c-0.2-0.2-0.2-0.6 0-0.9l1.1-1.1c0.2-0.2 0.6-0.2 0.9 0l4 4 8.5-8.5c0.2-0.2 0.6-0.2 0.9 0l1.1 1.1c0.2 0.2 0.2 0.6 0 0.9l-9.6 9.6c-0.2 0.1-0.5 0.3-0.9 0.3z"/>
	</g>
</svg>
  );
};

addPropertyControls(shift_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
