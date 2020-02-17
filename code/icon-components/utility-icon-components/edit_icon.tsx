
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function edit_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m9.5 33.4l8.9 8.9c0.4 0.4 1 0.4 1.4 0l22.2-22.3c0.4-0.4 0.4-1 0-1.4l-8.8-8.8c-0.4-0.4-1-0.4-1.4 0l-22.3 22.3c-0.4 0.4-0.4 1 0 1.3z m26.6-27.7c-0.4 0.4-0.4 1 0 1.4l8.8 8.8c0.4 0.4 1 0.4 1.4 0l2.5-2.5c1.6-1.5 1.6-3.9 0-5.5l-4.7-4.7c-1.6-1.6-4.1-1.6-5.7 0l-2.3 2.5z m-34 42.5c-0.2 1 0.7 1.9 1.7 1.7l10.9-2.6c0.4-0.1 0.7-0.3 0.9-0.5l0.2-0.2c0.2-0.2 0.3-0.9-0.1-1.3l-9-9c-0.4-0.4-1.1-0.3-1.3-0.1l-0.2 0.2c-0.3 0.3-0.4 0.6-0.5 0.9l-2.6 10.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(edit_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
