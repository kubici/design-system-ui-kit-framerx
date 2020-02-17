
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom77_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m11.5 19.6h3.1c0.5 0 0.8-0.3 0.8-0.8v-1.2c0-6.1 4.5-10.8 10.2-10.8s10.2 4.7 10.2 10.8v1.2c0 0.5 0.3 0.8 0.8 0.8h3.1c0.5 0 0.8-0.3 0.8-0.8v-1.2c0-8.7-6.5-15.6-14.9-15.6s-14.9 6.9-14.9 15.6v1.2c0 0.5 0.3 0.8 0.8 0.8z m29.8 4.8h-30.6c-2.6 0-4.7 2.2-4.7 4.8v16c0 2.6 2.1 4.8 4.7 4.8h30.6c2.6 0 4.7-2.2 4.7-4.8v-16c0-2.6-2.1-4.8-4.7-4.8z m-11.5 12.9c-0.7 1.1-1.1 2.4-0.8 3.7l0.5 2.4c0.2 0.9-0.5 1.8-1.4 1.8h-5c-0.9 0-1.6-1-1.4-1.8l0.5-2.5c0.3-1.3-0.1-2.6-0.8-3.6-0.7-1-1-2.3-0.8-3.6 0.4-1.9 2-3.4 3.9-3.8 3.2-0.6 6 1.8 6 4.7 0 1-0.3 1.9-0.7 2.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom77_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
