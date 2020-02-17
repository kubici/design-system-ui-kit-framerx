
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom30_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m71.5 28.5c-5.5-5.5-12.8-8.5-20.5-8.5-1.7 0-3 1.3-3 3s1.3 3 3 3c6.1 0 11.9 2.4 16.3 6.7 4.3 4.4 6.7 10.2 6.7 16.3 0 1.7 1.3 3 3 3s3-1.3 3-3c0-7.7-3-15-8.5-20.5z m-20.5 3.5c-1.7 0-3 1.3-3 3s1.3 3 3 3c2.9 0 5.7 1.1 7.8 3.2 2.1 2.1 3.2 4.8 3.2 7.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-4.5-1.8-8.8-5-12s-7.5-5-12-5z m-4.3 28.7l2.6-7c1.8 0.7 3.8 0.3 5.3-1.1 2-2 2-5.1 0-7.1s-5.1-2-7.1 0c-1.5 1.5-1.8 3.7-1 5.6l-6.5 2.9-11.7-11.7c-0.8-0.8-2.2-0.8-2.9 0.1-7.5 9-7 22.4 1.5 30.8 8.4 8.4 21.8 8.9 30.8 1.5 0.9-0.7 0.9-2.1 0.1-2.9l-11.1-11.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom30_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
