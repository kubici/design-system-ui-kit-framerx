
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function capslock_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m43.6 21.1l-16.4-18.6c-0.6-0.7-1.8-0.7-2.4 0l-16.4 18.6c-0.6 0.7-0.1 1.9 0.9 1.9h7.7v12.5c0 0.8 0.7 1.5 1.5 1.5h15c0.8 0 1.5-0.7 1.5-1.5v-12.5h7.7c1 0 1.5-1.2 0.9-1.9z m-10.1 21.9h-15c-0.8 0-1.5 0.7-1.5 1.5v4c0 0.8 0.7 1.5 1.5 1.5h15c0.8 0 1.5-0.7 1.5-1.5v-4c0-0.8-0.7-1.5-1.5-1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(capslock_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
