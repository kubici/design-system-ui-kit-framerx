
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function open_folder_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m46 14h-22.7c-1.4 0-2.7-0.8-3.5-2l-3.5-6c-0.7-1.2-2-2-3.5-2h-6.8c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-26c0-2.2-1.8-4-4-4z m0-8h-24.1c-0.4 0-0.6 0.4-0.4 0.7l1.6 2.7c0.2 0.4 0.5 0.6 0.9 0.6h22c1.1 0 2.2 0.2 3.1 0.6 0.4 0.2 0.9-0.1 0.9-0.6 0-2.2-1.8-4-4-4z"/>
	</g>
</svg>
  );
};

addPropertyControls(open_folder_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
