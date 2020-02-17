
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom47_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m64 72h-34c-3.3 0-6 2.7-6 6v0.1c0 1 0.9 1.9 1.9 1.9h42.2c1 0 1.9-0.9 1.9-1.9v-0.1c0-3.3-2.7-6-6-6z m13.4-31.6l-15.9-14.8 2.6-3.9c0.4-0.6 0.1-1.4-0.6-1.5-4.9-1-7.9 2.4-7.9 2.4-30.8 0-25.8 33.9-24.3 41.8 0.2 0.9 1 1.6 2 1.6h27.1c0.8 0 1.3-1 0.8-1.6-5.5-6.7-8.4-14.2-10.2-19-0.3-0.8 0.5-1.7 1.3-1.3 7.3 3.7 10.3-0.3 15.2 2.8 2.4 1.5 5.4 1.1 7.4-0.9l2.7-2.7c0.6-0.8 0.6-2.1-0.2-2.9z m-20.4-3.4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom47_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
