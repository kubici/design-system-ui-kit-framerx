
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom21_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m57.6 71.1c-0.3-0.7-1-1.1-1.8-1.1h-11.6c-0.8 0-1.5 0.4-1.8 1.1l-2.7 7.4c-0.3 0.7 0.2 1.4 0.9 1.4h18.8c0.7 0 1.2-0.8 0.9-1.4l-2.7-7.4z m16.4-51.1h-48c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-32c0-3.3-2.7-6-6-6z m-24 42c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m24-10c0 1.1-0.9 2-2 2h-44c-1.1 0-2-0.9-2-2v-24c0-1.1 0.9-2 2-2h44c1.1 0 2 0.9 2 2v24z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom21_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
