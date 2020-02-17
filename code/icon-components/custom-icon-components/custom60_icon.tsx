
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom60_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m80 45.3c-2.4-14.3-14.9-25.3-30-25.3s-27.6 11-30 25.3c-0.2 0.9 0.9 1.6 1.6 1 1.5-1.3 3.4-2 5.6-2 2.8 0 5.2 1.3 6.8 3.3 0.4 0.5 1.2 0.5 1.6 0 1.6-2 4-3.3 6.8-3.3s5.2 1.3 6.8 3.3c0.4 0.5 1.2 0.5 1.6 0 1.6-2 4-3.3 6.8-3.3s5.2 1.3 6.8 3.3c0.4 0.5 1.2 0.5 1.6 0 1.6-2 4-3.3 6.8-3.3 2.1 0 4.1 0.8 5.6 2 0.7 0.6 1.7 0 1.6-1z m-18 22.7c-1.7 0-3 1.3-3 3s-1.3 3-3 3-3-1.3-3-3v-14c0-1.7-1.3-3-3-3s-3 1.3-3 3v14c0 5 4 9 9 9s9-4 9-9c0-1.7-1.3-3-3-3z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom60_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
