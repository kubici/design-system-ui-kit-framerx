
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function file_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m9.7 36.1v-24.8c-2.6 0-4.7 2.1-4.7 4.6v29.4c0 2.6 2.1 4.7 4.7 4.7h23.3c2.6 0 4.7-2.1 4.7-4.6h-18.7c-5.1 0-9.3 0-9.3-9.3z m35.7-20.2h-7.8c-2.6 0-4.7-2.1-4.7-4.6v-7.8c0.1-0.8-0.6-1.5-1.5-1.5h-12.4c-2.6 0-4.7 2.1-4.7 4.6v29.4c0 2.6 2.1 4.6 4.7 4.6h23.3c2.6 0 4.7-2.1 4.7-4.6v-18.5c0-0.9-0.7-1.6-1.6-1.6z m1.3-6.5l-7.2-7.1c-0.2-0.2-0.4-0.3-0.7-0.3-0.6 0-1.1 0.5-1.1 1.1v5.1c0 1.7 1.4 3.1 3.1 3.1h5.1c0.6 0 1.1-0.5 1.1-1.1 0-0.3-0.1-0.5-0.3-0.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(file_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  