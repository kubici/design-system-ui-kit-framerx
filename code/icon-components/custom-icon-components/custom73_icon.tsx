
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom73_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m23.5 35h53c1.3 0 2.3-1.3 1.9-2.5-1.2-4.1-3-7.9-5.4-11.2-0.7-1-2.1-1.1-2.9-0.3-2.4 2.2-5.7 3.5-9.2 3.5-3.7 0-7.1-1.5-9.6-4-0.8-0.7-2-0.7-2.7 0-2.5 2.5-5.9 4-9.6 4-3.5 0-6.7-1.3-9.2-3.5-0.9-0.8-2.2-0.6-2.9 0.3-2.4 3.3-4.2 7.1-5.4 11.2-0.3 1.2 0.7 2.5 2 2.5z m56.5 8c0-1.1-0.9-2-2-2h-56c-1.1 0-2 0.9-2 2v0.4c0 18.6 13 34.1 30 36.5 17-2.4 30-17.9 30-36.5v-0.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom73_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
