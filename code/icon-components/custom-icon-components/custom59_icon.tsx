
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom59_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m68.3 31c1 0 1.7-0.8 1.7-1.7 0-0.7-0.4-1.4-1.1-1.8-1.3-0.7-3.3-4.1-4-6.2-0.2-0.8-1-1.3-1.8-1.3h-24.3c-0.8 0-1.6 0.5-1.8 1.3-0.6 2-2.7 5.5-3.9 6.2-0.6 0.4-1 1-1 1.8 0 1 0.8 1.7 1.7 1.7h34.5z m-36.3 42.9c0 3.4 2.7 6.1 6 6.1h26c3.3 0 6-2.7 6-6v-0.1c0-1.1-0.9-1.9-1.9-1.9h-34.2c-1 0-1.9 0.9-1.9 1.9z m38-9.9v-25c0-1.1-0.9-2-2-2h-34c-1.1 0-2 0.9-2 2v25c0 1.1 0.9 2 2 2h34c1.1 0 2-0.9 2-2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom59_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
