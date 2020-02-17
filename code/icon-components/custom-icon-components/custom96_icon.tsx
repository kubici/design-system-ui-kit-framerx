
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom96_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m79.4 28.7l-5.2-3.9c-0.7-0.5-1.5-0.8-2.4-0.8h-17.8v-2c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v2h-20c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h45.7c0.9 0 1.7-0.3 2.4-0.8l5.2-3.9c0.9-0.7 0.9-1.9 0.1-2.6z m-5.4 17.3h-20v-3c0-0.6-0.4-1-1-1h-6c-0.6 0-1 0.4-1 1v3h-17.7c-0.9 0-1.7 0.3-2.4 0.8l-5.2 3.9c-0.9 0.6-0.9 1.9 0 2.6l5.2 3.9c0.7 0.5 1.5 0.8 2.4 0.8h45.7c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2z m-20 25.6v-6.6c0-0.6-0.4-1-1-1h-6c-0.6 0-1 0.4-1 1v6.6c-4 1.1-6.2 3.5-6.9 6.5-0.2 0.9 0.5 1.9 1.5 1.9h18.9c1 0 1.7-0.9 1.5-1.9-0.8-3-3-5.4-7-6.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom96_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
