
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function preview_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m51.8 25.1c-4.7-9.5-14.5-16.1-25.8-16.1s-21.1 6.6-25.8 16.1c-0.3 0.6-0.3 1.3 0 1.8 4.7 9.5 14.5 16.1 25.8 16.1s21.1-6.6 25.8-16.1c0.3-0.6 0.3-1.2 0-1.8z m-25.8 11.9c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z m0-18c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"/>
	</g>
</svg>
  );
};

addPropertyControls(preview_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
