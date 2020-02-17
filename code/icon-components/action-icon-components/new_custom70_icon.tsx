
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom70_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m24.4 37l-9.2-9.1c-1.9-1.8-5-1.8-6.9 0l-5.8 5.7c-0.6 0.6-0.6 1.7 0 2.2l1.1 1.2 1.1 1.1 9.3 9.1 0.6 0.6 1.8 1.7c0.6 0.6 1.7 0.6 2.3 0l5.8-5.7c1.8-1.8 1.8-4.9-0.1-6.8z m-15-3.4l1.2-1.1c0.6-0.6 1.6-0.6 2.2 0l7 6.8c0.6 0.6 0.6 1.7 0 2.2l-1.2 1.1c-0.6 0.6-1.6 0.6-2.2 0l-7-6.8c-0.7-0.6-0.7-1.6 0-2.2z m10-8.3l7.5 7.3c0.2 0.2 0.3 0.2 0.6 0.2l3.4-0.1c0.4 0 0.7-0.3 0.7-0.7l0.1-3c0-0.4 0.3-0.7 0.7-0.7l3-0.1c0.4 0 0.7-0.3 0.7-0.7l0.1-3c0-0.4 0.3-0.7 0.7-0.7l3-0.1c0.4 0 0.7-0.3 0.7-0.7l0.1-3c0-0.4 0.3-0.7 0.7-0.7l3-0.1c0.4 0 0.7-0.3 0.7-0.7l0.1-3c0-0.4 0.3-0.6 0.6-0.7l3.3-0.5c0.6-0.1 0.9-0.7 0.6-1.2l-6.9-10.4c-0.6-0.8-1.7-0.9-2.4-0.2l-21.1 20.8c-0.5 0.5-0.5 1.4 0.1 2z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom70_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
