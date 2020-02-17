
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom33_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m65 42h-29c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h29c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2z m-14 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m29-23h-60c-1.1 0-2 0.9-2 2v2c0 2.2 1.8 4 4 4v36c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-36h45v36c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-36h-1c2.2 0 4-1.8 4-4v-2c0-1.1-0.9-2-2-2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom33_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
