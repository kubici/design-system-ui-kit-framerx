
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom13_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m74 22h-48c-3.3 0-6 2.7-6 6v6c0 1.1 0.9 2 2 2h56c1.1 0 2-0.9 2-2v-6c0-3.3-2.7-6-6-6z m0 20h-48c-1.1 0-2 0.9-2 2v28c0 3.3 2.7 6 6 6h40c3.3 0 6-2.7 6-6v-28c0-1.1-0.9-2-2-2z m-13 9c0 1.6-1.3 3-3 3h-16c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3h16c1.7 0 3 1.3 3 3z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom13_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
