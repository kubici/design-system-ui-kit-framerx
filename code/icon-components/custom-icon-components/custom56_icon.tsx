
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom56_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m62.7 30.3c-6.3 6.3-13.9-1.4-20.9 5.6l-20.1 20.1c-2.3 2.3-2.3 6 0 8.3l7 7 7 7c2.3 2.3 6 2.3 8.3 0l20.2-20.2c7-7-0.7-14.6 5.6-20.9l1.6-1.6c0.4-0.4 0.4-1 0-1.4l-5.5-5.5c-0.4-0.4-1-0.4-1.4 0l-1.8 1.6z m-4.8 25.7l-7 7c-0.8 0.8-2 0.8-2.8 0l-5.6-5.6-5.6-5.6c-0.8-0.8-0.8-2 0-2.8l7-7c0.8-0.8 2-0.8 2.8 0l5.6 5.6 5.6 5.6c0.8 0.8 0.8 2 0 2.8z m21.5-31.3l-2.1-2.1-2.1-2.1c-0.8-0.8-2-0.8-2.8 0l-2.6 2.6c-0.4 0.4-0.4 1 0 1.4l5.5 5.5c0.4 0.4 1 0.4 1.4 0l2.6-2.6c0.9-0.6 0.9-1.9 0.1-2.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom56_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
