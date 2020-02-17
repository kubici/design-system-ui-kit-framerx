
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom36_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m38.7 72h-4.1c-0.7 0-1.4 0.4-1.7 1l-1.4 2.4c-0.8 1.4-0.5 3.2 0.8 4.1 0.5 0.4 1.1 0.5 1.7 0.5 1 0 2-0.5 2.6-1.5l3-5c0.4-0.7-0.1-1.5-0.9-1.5z m28.4 1c-0.4-0.6-1-1-1.7-1h-4.1c-0.8 0-1.3 0.8-0.9 1.5l3 5c0.6 1 1.6 1.5 2.6 1.5 0.6 0 1.2-0.2 1.7-0.5 1.3-0.9 1.6-2.8 0.8-4.1l-1.4-2.4z m-0.1-53h-34c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h34c3.3 0 6-2.7 6-6v-34c0-3.3-2.7-6-6-6z m-31 42c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m28 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m3-12c0 1.1-0.9 2-2 2h-30c-1.1 0-2-0.9-2-2v-20c0-1.1 0.9-2 2-2h30c1.1 0 2 0.9 2 2v20z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom36_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
