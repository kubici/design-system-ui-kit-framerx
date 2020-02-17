
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom70_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m47.9 63.8l-11.5-11.3c-2.4-2.3-6.2-2.3-8.6 0l-7.2 7.1c-0.8 0.8-0.8 2.1 0 2.8l1.4 1.4 1.4 1.4 11.6 11.4 0.7 0.7 2.2 2.1c0.8 0.8 2.1 0.8 2.9 0l7.2-7.1c2.3-2.3 2.3-6.1-0.1-8.5z m-18.7-4.2l1.5-1.4c0.8-0.8 2-0.8 2.8 0l8.7 8.5c0.8 0.8 0.8 2.1 0 2.8l-1.5 1.4c-0.8 0.8-2 0.8-2.8 0l-8.7-8.5c-0.8-0.8-0.8-2.1 0-2.8z m12.5-10.4l9.3 9.1c0.2 0.2 0.4 0.3 0.7 0.3l4.3-0.1c0.5 0 0.9-0.4 0.9-0.9l0.1-3.7c0-0.5 0.4-0.9 0.9-0.9l3.8-0.1c0.5 0 0.9-0.4 0.9-0.9l0.1-3.7c0-0.5 0.4-0.9 0.9-0.9l3.8-0.1c0.5 0 0.9-0.4 0.9-0.9l0.1-3.7c0-0.5 0.4-0.9 0.9-0.9l3.8-0.1c0.5 0 0.9-0.4 0.9-0.9l0.1-3.8c0-0.5 0.4-0.8 0.8-0.9l4.1-0.6c0.7-0.1 1.1-0.9 0.7-1.5l-8.8-13c-0.7-1-2.1-1.1-3-0.3l-26.3 26c-0.6 0.6-0.6 1.8 0.1 2.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom70_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
