
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function power_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m34.4 7.7c-0.7-0.3-1.4 0.2-1.4 0.9v3.8c0 0.7 0.4 1.4 1 1.7 5.3 3 8.7 9 7.9 15.7-0.8 7.3-6.7 13.3-14.1 14.1-9.6 1.1-17.8-6.5-17.8-15.9 0-5.9 3.2-11.1 8-13.9 0.6-0.3 1-1 1-1.7v-3.8c0-0.7-0.7-1.2-1.4-0.9-8.5 3.5-14.4 12.3-13.5 22.3 0.9 10.3 9.1 18.7 19.4 19.9 13.2 1.4 24.5-8.9 24.5-21.9 0-9.2-5.6-17-13.6-20.3z m-5.4-4.2c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v17c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-17z"/>
	</g>
</svg>
  );
};

addPropertyControls(power_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
