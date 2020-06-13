
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom84_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m45.6 37.2h-39.2c-1.3 0-2.4 1-2.4 2.4s1 2.4 2.4 2.4h3.1l1.3 6.8c0.2 0.7 0.8 1.2 1.5 1.2h25.8c0.7 0 1.3-0.5 1.5-1.2l1.3-6.8h4.7c1.3 0 2.4-1 2.4-2.4s-1-2.4-2.4-2.4z m-33-4.8h11v-4.5c-0.9-0.6-1.6-1.6-1.6-2.7 0-1.8 1.4-3.2 3.1-3.2 1.7 0 3.1 1.4 3.1 3.2 0 1.2-0.6 2.2-1.6 2.7v4.5h11c0.9 0 1.6-0.7 1.6-1.6v-2.4c0-4.9-4.6-6.6-8.2-8.1-2.4-1-2.8-2-2.8-3s0.7-2 1.5-2.7c1.4-1.3 2.3-3.1 2.3-5.3 0-3.9-2.5-7.4-6.9-7.4s-6.9 3.4-6.9 7.4c0 2.2 0.8 3.9 2.3 5.3 0.8 0.7 1.5 1.7 1.5 2.7 0 1-0.4 1.9-2.8 3-3.6 1.5-8.2 3.4-8.2 8.1v2.4c0.1 0.9 0.8 1.6 1.6 1.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom84_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  