
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom47_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m36.6 43.6h-27.7c-2.7 0-4.9 2.2-4.9 4.8v0.1c0 0.8 0.7 1.5 1.5 1.5h34.4c0.8 0 1.5-0.7 1.5-1.5v-0.1c0.1-2.6-2.1-4.8-4.8-4.8z m10.9-25.3l-13-11.8 2.1-3.1c0.3-0.5 0.1-1.1-0.5-1.2-4-0.8-6.4 1.9-6.4 1.9-25.1 0-21 27.1-19.8 33.4 0.2 0.7 0.8 1.3 1.6 1.3h22.1c0.7 0 1.1-0.8 0.7-1.3-4.5-5.4-6.8-11.4-8.3-15.2-0.2-0.6 0.4-1.4 1.1-1 5.9 3 8.4-0.2 12.4 2.2 2 1.2 4.4 0.9 6-0.7l2.2-2.2c0.4-0.6 0.4-1.6-0.2-2.3z m-16.6-2.7c-1.4 0-2.4-1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom47_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  