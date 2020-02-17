
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function thunder_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m30.4 3.1c-1.5-1.5-3.8-1.5-5.3 0l-22 22c-1.5 1.5-1.5 3.8 0 5.2l11.7 11.8c1.5 1.4 3.8 1.4 5.2 0l22.1-22.1c1.4-1.4 1.4-3.7 0-5.2l-11.7-11.7z m-18.2 1.9c-0.5-0.5-1.5-0.5-2 0l-5.2 5.2c-0.5 0.5-0.5 1.5 0 2l2 1.9c0.5 0.6 1.4 0.6 1.9 0l5.2-5.2c0.6-0.5 0.6-1.4 0-1.9l-1.9-2z m18.9 31.3c-0.6 0.5-0.6 1.4 0 1.9l11.3 11.4c0.5 0.5 1.5 0.5 2 0l5.2-5.2c0.5-0.5 0.5-1.5 0-2l-11.4-11.4c-0.5-0.5-1.4-0.5-1.9 0l-5.2 5.3z"/>
	</g>
</svg>
  );
};

addPropertyControls(thunder_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
