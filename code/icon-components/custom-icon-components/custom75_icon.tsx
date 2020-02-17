
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom75_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m50 20c-1.7 0-3 1.3-3 3v54c0 1.7 1.3 3 3 3 16.5 0 30-13.5 30-30s-13.5-30-30-30z m23.8 27h-7.9c-0.3-7.1-1.9-13.3-4.3-18 6.6 3.7 11.2 10.3 12.2 18z m-20.8 25.7v-19.7h6.9c-0.5 9.4-3.5 16.8-6.9 19.7z m0-25.7v-19.7c3.4 2.9 6.4 10.3 6.9 19.7h-6.9z m8.6 24c2.4-4.7 3.9-10.9 4.3-18h7.9c-1 7.7-5.6 14.3-12.2 18z m-28.1-31.1c0.8 0.6 2 0.5 2.7-0.3l5.5-6.2c0.7-0.8 0.7-2-0.1-2.7l-5.5-5.5c-0.7-0.7-1.7-0.8-2.5-0.3-0.4 0.2-0.7 0.5-1.1 0.7-7.5 5.4-12.5 14.3-12.5 24.4 0 10.1 5 19 12.5 24.4 0.4 0.3 0.7 0.5 1.1 0.7 0.8 0.5 1.8 0.4 2.5-0.3l5.5-5.5c0.7-0.7 0.8-2 0.1-2.7l-5.5-6.2c-0.7-0.8-1.9-0.9-2.7-0.3l-2.1 1.6c-2.2-3.4-3.4-7.4-3.4-11.7s1.2-8.3 3.4-11.7l2.1 1.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom75_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
