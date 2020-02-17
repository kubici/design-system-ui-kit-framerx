
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom48_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m48.4 5.2h-8v-1.6c0-0.9-0.7-1.6-1.6-1.6h-25.6c-0.9 0-1.6 0.7-1.6 1.6v1.6h-8c-0.9 0-1.6 0.7-1.6 1.6v10.4c0 4 3.2 7.2 7.2 7.2h3.7c2.2 5.1 7.1 8.7 13 8.8 6.1 0.1 11.2-3.6 13.4-8.8h3.5c4 0 7.2-3.2 7.2-7.2v-10.4c0-0.9-0.7-1.6-1.6-1.6z m-39.2 14.4c-1.4 0-2.4-1-2.4-2.4v-7.2h4.8v8.5c0 0.4 0 0.7 0.1 1.1h-2.5z m36-2.4c0 1.4-1 2.4-2.4 2.4h-2.5c0-0.3 0.1-0.7 0.1-1v-8.6h4.8v7.2z m-11.2 28h-0.8c-2.6 0-4.8-2.2-4.8-4.8v-1.6c0-0.5-0.3-0.8-0.8-0.8h-3.2c-0.5 0-0.8 0.3-0.8 0.8v1.6c0 2.6-2.2 4.8-4.8 4.8h-0.8c-0.9 0-1.6 0.7-1.6 1.6v1.6c0 0.9 0.7 1.6 1.6 1.6h16c0.9 0 1.6-0.7 1.6-1.6v-1.6c0-0.9-0.7-1.6-1.6-1.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom48_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
