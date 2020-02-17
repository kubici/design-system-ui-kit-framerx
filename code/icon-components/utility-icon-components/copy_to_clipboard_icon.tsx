
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function copy_to_clipboard_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m17.4 11.6h17.3c0.9 0 1.6-0.7 1.6-1.6v-3.2c0-2.6-2.1-4.8-4.7-4.8h-11c-2.6 0-4.7 2.2-4.7 4.8v3.2c-0.1 0.9 0.6 1.6 1.5 1.6z m25.9-5.6h-1.6c-0.5 0-0.8 0.3-0.8 0.8v3.2c0 3.5-2.8 6.4-6.3 6.4h-17.2c-3.5 0-6.3-2.9-6.3-6.4v-3.2c0-0.5-0.3-0.8-0.8-0.8h-1.6c-2.6 0-4.7 2.2-4.7 4.8v34.4c0 2.6 2.1 4.8 4.7 4.8h34.6c2.6 0 4.7-2.2 4.7-4.8v-34.4c0-2.6-2.1-4.8-4.7-4.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(copy_to_clipboard_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
