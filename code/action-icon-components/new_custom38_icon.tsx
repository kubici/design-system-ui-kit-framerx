
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom38_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m26 22c-3.5 0-6.4 2.9-6.4 6.4s2.9 6.4 6.4 6.4 6.4-2.9 6.4-6.4-2.9-6.4-6.4-6.4z m19.2-8h-6.5c-0.6 0-1.2-0.3-1.4-1l-2.1-4.4c-0.8-1.6-2.5-2.6-4.3-2.6h-9.8c-1.8 0-3.5 1-4.3 2.6l-2.1 4.4c-0.2 0.6-0.8 1-1.4 1h-6.5c-2.6 0-4.8 2.2-4.8 4.8v22.4c0 2.6 2.2 4.8 4.8 4.8h38.4c2.6 0 4.8-2.2 4.8-4.8v-22.4c0-2.6-2.2-4.8-4.8-4.8z m-19.2 25.8c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2 11.2 5 11.2 11.2-5 11.2-11.2 11.2z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom38_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  