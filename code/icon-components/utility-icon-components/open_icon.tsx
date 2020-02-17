
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function open_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m8 35v-0.6 1.2-0.6z" fill={props.fill}/>
	<g fill={props.fill}>
		<path d="m46 2h-40c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h12c0.6 0 1-0.4 1-1v-4c0-0.6-0.4-1-1-1h-8.5c-0.8 0-1.5-0.7-1.5-1.5v-25c0-0.8 0.7-1.5 1.5-1.5h33c0.8 0 1.5 0.7 1.5 1.5v25c0 0.8-0.7 1.5-1.5 1.5h-8.5c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1h12c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4z m-8.5 32.6l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-12.6-12.6c-0.6-0.6-1.5-0.6-2.1 0l-12.5 12.5c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l4.6-4.6c0.6-0.6 1.8-0.2 1.8 0.7v17.9c0 0.8 0.6 1.5 1.4 1.5h3c0.8 0 1.6-0.7 1.6-1.5v-17.9c0-0.9 1-1.3 1.7-0.7l4.6 4.7c0.6 0.5 1.6 0.5 2.2 0z"/>
	</g>
</svg>
  );
};

addPropertyControls(open_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
