
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom85_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m48.4 5.2h-40v-1.6c0-0.9-0.7-1.6-1.6-1.6h-3.2c-0.9 0-1.6 0.7-1.6 1.6v44.8c0 0.9 0.7 1.6 1.6 1.6h3.2c0.9 0 1.6-0.7 1.6-1.6v-36.8h40c0.9 0 1.6-0.7 1.6-1.6v-3.2c0-0.9-0.7-1.6-1.6-1.6z m-3.2 11.2h-27.2c-2.6 0-4.8 2.2-4.8 4.8v17.6c0 2.6 2.2 4.8 4.8 4.8h27.2c2.6 0 4.8-2.2 4.8-4.8v-17.6c0-2.6-2.2-4.8-4.8-4.8z m-4.4 13.6h-2v8c0 0.5-0.3 0.8-0.8 0.8h-3.2c-0.5 0-0.8-0.3-0.8-0.8v-4.8c0-0.5-0.3-0.8-0.8-0.8h-3.2c-0.5 0-0.8 0.3-0.8 0.8v4.8c0 0.5-0.3 0.8-0.8 0.8h-3.2c-0.5 0-0.8-0.3-0.8-0.8v-8h-2c-0.4 0-0.6-0.5-0.2-0.7l9-8.7c0.3-0.2 0.7-0.2 1 0l9 8.7c0.2 0.2 0 0.7-0.4 0.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom85_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
