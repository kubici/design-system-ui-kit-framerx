
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom54_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m7.8 26.9c5.2-0.9 9.8-3 14.7-5.3 1.6-0.7 4.6-2.1 6-2.7 0.5-0.2 0.8-0.7 0.6-1.3-0.4-2.3-2.3-4.2-4.7-4.2h-1.6v-3c0-0.9-0.8-1.6-1.6-1.6v-3.2c0-0.9-0.7-1.6-1.6-1.6h-3.2c-0.9 0-1.6 0.7-1.6 1.6v3.2c-0.8 0-1.6 0.7-1.6 1.6v3h-1.6c-2.6 0-4.8 2.4-4.8 5.1v7.5c0 0.6 0.5 1 1 0.9z m35.8 15.8s5.8-9 6.4-21.6c0-0.9-0.7-1.7-1.7-1.7-19 0.7-27.9 12.2-44.8 12.9-0.9 0-1.5 0.8-1.5 1.6v6c0 2.6 2 4.6 4.5 4.8 8.4 0.5 26.4 1.7 36.7 3.4 1 0.2 2-0.8 1.8-1.8-0.2-1.3-0.6-2.7-1.4-3.6z m-0.8-14.3c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom54_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
