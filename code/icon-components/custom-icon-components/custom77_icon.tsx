
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom77_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m32 42h4c0.6 0 1-0.4 1-1v-1.5c0-7.6 5.7-13.5 13-13.5s13 5.9 13 13.5v1.5c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-1.5c0-10.9-8.3-19.5-19-19.5s-19 8.6-19 19.5v1.5c0 0.6 0.4 1 1 1z m38 6h-39c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h39c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6z m-14.7 16.1c-0.9 1.4-1.4 3-1 4.6l0.7 3c0.2 1.1-0.6 2.3-1.8 2.3h-6.4c-1.2 0-2-1.2-1.8-2.3l0.7-3.1c0.4-1.6-0.1-3.2-1-4.5-0.9-1.3-1.3-2.9-1-4.5 0.5-2.4 2.5-4.3 5-4.8 4.1-0.8 7.6 2.2 7.6 5.9 0 1.3-0.4 2.4-1 3.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom77_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
