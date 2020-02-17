
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom15_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m70 46.1c-3.5-1.5-4-2.8-4-4.2 0-1.5 1-2.8 2.2-3.9 2.1-1.9 3.2-4.5 3.2-7.5 0-5.6-3.5-10.5-9.8-10.5-5.4 0-8.7 3.6-9.6 8.2-0.1 0.4 0.1 0.8 0.4 1 4.5 3.2 7.3 8.6 7.3 15.1 0 4.5-1.5 8.6-4.3 11.7-0.4 0.5-0.3 1.3 0.4 1.6 1.7 0.7 3.7 1.7 5.7 2.8 0.6 0.4 1.3 0.6 2 0.6h11.5c2.8 0 5-2.2 5-4.9v-0.8c0-4.5-4.9-7-10-9.2z m-17.9 16.5c-4.2-1.7-4.8-3.3-4.8-5 0-1.7 1.2-3.3 2.6-4.6 2.4-2.2 3.8-5.2 3.8-8.8 0-6.6-4.2-12.3-11.6-12.3s-11.6 5.7-11.6 12.3c0 3.6 1.3 6.6 3.8 8.8 1.4 1.2 2.6 2.9 2.6 4.6 0 1.7-0.6 3.2-4.8 5-6.1 2.5-11.9 5.4-12 10.7v0.9c0 3.2 2.7 5.8 6 5.8h31.9c3.3 0 6-2.6 6-5.8v-0.9c0-5.3-5.8-8.2-11.9-10.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom15_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
