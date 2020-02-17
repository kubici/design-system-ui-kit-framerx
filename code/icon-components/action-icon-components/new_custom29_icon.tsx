
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom29_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m45.3 8.4h-1.5c-1 0-1.7 0.8-1.7 1.8v31.8c0 0.1 0 0.2 0.1 0.3l2 2.8c0.2 0.2 0.4 0.2 0.6 0l2-2.8c0.2-0.1 0.2-0.1 0.2-0.3v-31.8c0-1-0.7-1.8-1.7-1.8z m-12.8-6.4h-22.7c-2.6 0-4.8 2.2-4.8 4.8v38.4c0 2.6 2.2 4.8 4.8 4.8h22.6c2.7 0 4.8-2.2 4.8-4.8v-38.4c0.1-2.6-2.1-4.8-4.7-4.8z m-11.3 46.4c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1.1 2.4-2.4 2.4z m11.3-8c0 0.9-0.7 1.6-1.6 1.6h-19.4c-0.9 0-1.6-0.7-1.6-1.6v-30.4c0-0.9 0.7-1.6 1.6-1.6h19.4c0.9 0 1.6 0.7 1.6 1.6v30.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom29_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
