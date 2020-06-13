
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function brush_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m49.4 2.7c-3.4-3.5-22.4 7.3-34 25.9-0.5 0.9-0.2 2 0.7 2.4 2.6 1.2 4.7 3.4 5.8 6.1 0.4 1 1.5 1.3 2.4 0.7 18-11.9 28.5-31.6 25.1-35.1z m-37.5 32.5c-1.5 0-2.9 0.8-3.9 1.8h-0.1c-0.5 0-1 0.8-1.4 1.5-1.6 2.7-1.9 5.9-4.3 9.4-0.4 0.6-0.3 1.5 0.4 1.7 3.4 1.1 9.5 0.1 12.5-2.1v0.1c1-0.2 0.7-0.6 1-0.6 1.1-2 2-3 2-4.9-0.1-3.7-2.7-6.9-6.2-6.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(brush_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  