
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function volume_high_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m24.6 2.6l-12.6 15.4h-6c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h6l12.6 15.4c1.3 1.3 3.4 0.4 3.4-1.4v-44c0-1.8-2.2-2.7-3.4-1.4z m18 6.1c-0.4-0.4-1-0.4-1.4 0l-1.4 1.4c-0.4 0.4-0.4 1.1 0 1.4 3.8 3.7 6.2 8.8 6.2 14.5 0 5.7-2.4 10.8-6.2 14.5-0.4 0.4-0.4 1 0 1.4l1.4 1.4c0.4 0.4 1 0.4 1.4 0 4.5-4.3 7.4-10.5 7.4-17.3 0-6.8-2.8-13-7.4-17.3z m-6.3 6.4c-0.4-0.4-1-0.4-1.4 0l-1.4 1.4c-0.4 0.4-0.4 1 0 1.4 2.2 2 3.5 4.9 3.5 8.1 0 3.2-1.4 6.1-3.6 8.1-0.4 0.4-0.4 1 0 1.4l1.4 1.4c0.4 0.4 1 0.4 1.4 0 2.9-2.7 4.8-6.6 4.8-11 0-4.2-1.8-8.1-4.7-10.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(volume_high_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
