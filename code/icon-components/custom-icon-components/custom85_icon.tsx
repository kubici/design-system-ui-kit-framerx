
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom85_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m78 24h-50v-2c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v56c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-46h50c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2z m-4 14h-34c-3.3 0-6 2.7-6 6v22c0 3.3 2.7 6 6 6h34c3.3 0 6-2.7 6-6v-22c0-3.3-2.7-6-6-6z m-5.5 17h-2.5v10c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-6c0-0.6-0.4-1-1-1h-4c-0.6 0-1 0.4-1 1v6c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-10h-2.5c-0.5 0-0.7-0.6-0.3-0.9l11.2-10.9c0.4-0.3 0.9-0.3 1.3 0l11.2 10.9c0.3 0.3 0.1 0.9-0.4 0.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom85_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
