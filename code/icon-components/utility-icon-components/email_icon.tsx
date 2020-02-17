
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function email_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m24.9 30.1c0.6 0.6 1.5 0.6 2.1 0l22.6-21c0.4-0.8 0.3-2.1-1.3-2.1l-44.7 0.1c-1.2 0-2.2 1.1-1.3 2.1l22.6 20.9z m25.1-12.8c0-1-1.2-1.6-2-0.9l-17.7 16.3c-1.2 1.1-2.7 1.7-4.3 1.7s-3.1-0.6-4.3-1.6l-17.6-16.4c-0.8-0.7-2-0.2-2 0.9-0.1-0.3-0.1 22.7-0.1 22.7 0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-22.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(email_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  