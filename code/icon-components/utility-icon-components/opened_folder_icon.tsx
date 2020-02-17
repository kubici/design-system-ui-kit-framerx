
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function opened_folder_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m44 15c0-2.2-1.8-4-4-4h-14.7c-1.8 0-3.5-2-3.5-2l-2.5-3s-1.2-2-3.5-2h-3.8c-2.2 0-4 1.8-4 4v9h36v-2z m2.9 6h-41.8c-2 0-3.5 1.9-3 3.8l5.7 21c0.4 1.3 1.6 2.2 3 2.2h30.5c1.4 0 2.7-0.9 3-2.2l5.7-21c0.4-1.9-1.1-3.8-3.1-3.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(opened_folder_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
