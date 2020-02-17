
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom95_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m53 30.2v-4.2h1c1.6 0 3-1.3 3-3 0-1.6-1.3-3-3-3h-8c-1.6 0-3 1.3-3 3 0 1.6 1.3 3 3 3h1v4.2c-12.4 1.5-22 12-22 24.8 0 13.8 11.2 25 25 25s25-11.2 25-25c0-12.8-9.6-23.3-22-24.8z m-3 43.8c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19-8.5 19-19 19z m6.6-29.2l-4.6 4.6c-0.6-0.2-1.3-0.4-2-0.4-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6c0-0.7-0.1-1.4-0.4-2l4.6-4.6c1-1 1-2.6 0-3.6-1-1.1-2.6-1.1-3.6 0z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom95_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
