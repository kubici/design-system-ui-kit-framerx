
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom89_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m32.3 20.7c-0.3-0.4-1-0.3-1.2 0.2-1 1.4-1.9 3.4-1.9 5.9v8.8c0 1.3-1 2.4-2.4 2.4-1.3 0-2.4-1-2.4-2.4v-27.3c0-6.1-5.4-7.1-9.3-5.6-1 0.3-2 1-2.7 1.8-0.5 0.6-1 1-1.8 1.3-1.4 0.3-3.9-1-5.2-1.8-0.7-0.4-1.7-0.2-2.1 0.4l-1 1.4c-0.6 0.7-0.3 1.8 0.4 2.3 1.5 1 3.9 2.5 5.8 2.8 2.8 0.5 5.4-0.4 7.4-2.3l-0.1 0.1c0.6-0.5 1.5-1.3 2.2-0.4 1.6 2.4-4.8 12.9-4.8 28.1v1.3c0 6.5 6.6 12.1 13 12.4 6.9 0.3 12.6-5.2 12.6-12 0-3.4 1.3-5.7 2.6-7 0.3-0.3 0.3-0.8 0-1.1l-9.1-9.3z m15.3 7.6c-0.6 0-1.2-0.2-1.7-0.7l-12.8-12.7c-1-1-1-2.5 0-3.4 1-1 2.5-1 3.4 0l12.8 12.8c1 1 1 2.5 0 3.4-0.5 0.4-1.1 0.6-1.7 0.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom89_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
