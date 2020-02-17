
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function announcement_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m46 74.3l-1.6-1.3c-1.8-1.2-1.8-3.7-1.8-5v-3.6c0-1-0.9-1.9-1.9-1.9h-7.5c-1 0-1.9 0.9-1.9 1.9v9.6c0 3.4 2 6 5.1 6h6.2c3.6 0 3.9-2.5 3.9-2.5s0.6-2.2-0.5-3.2z m28-34.2v-17.1c0-3-3.8-3.9-5.8-1.9l-11.2 10.5c-1.8 1.5-4 2.1-6.3 2.1h-19c-6.6 0.1-11.7 5.7-11.7 12.2v0.2c0 6.5 5.1 11.4 11.7 11.4h19.1c2.4 0 4.6 1 6.4 2.5l11 10.7c2 2 5.8 1.2 5.8-1.7v-17c3.8 0 6-2.6 6-6 0-3.3-2.3-5.9-6-5.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(announcement_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
