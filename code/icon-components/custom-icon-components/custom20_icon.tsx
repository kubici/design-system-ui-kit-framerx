
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom20_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m38 47.7c0-0.8-1-1.3-1.6-0.8l-14 10.8c-1.5 1.1-2.4 2.9-2.4 4.8v4.1c0 0.7 0.7 1.2 1.3 0.9l15.4-5.8c0.8-0.3 1.3-1 1.3-1.9v-12.1z m22.1 28l-4.1-2.7v-45.4c0-2.7-2.9-5.7-4.8-7.2-0.7-0.6-1.8-0.6-2.5 0-1.8 1.5-4.8 4.5-4.8 7.2v45.4l-4.6 3c-0.8 0.6-1.4 1.5-1.4 2.5v0.6c0 0.5 0.4 0.9 0.9 0.9h22.1c0.5 0 1.1-0.4 1.1-0.9 0-1.4-0.8-2.6-1.9-3.4z m17.5-18l-14-10.8c-0.7-0.5-1.6 0-1.6 0.8v12.2c0 0.8 0.5 1.6 1.3 1.9l15.4 5.8c0.7 0.2 1.3-0.2 1.3-0.9v-4.1c0-2-0.9-3.8-2.4-4.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom20_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
