
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function download_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m48.5 31h-3c-0.8 0-1.5 0.7-1.5 1.5v10c0 0.8-0.7 1.5-1.5 1.5h-33c-0.8 0-1.5-0.7-1.5-1.5v-10c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v13.5c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-13.5c0-0.8-0.7-1.5-1.5-1.5z m-23.5 6.6c0.6 0.6 1.5 0.6 2.1 0l13.5-13.5c0.6-0.6 0.6-1.5 0-2.1l-2.1-2.1c-0.6-0.6-1.5-0.6-2.1 0l-5.6 5.6c-0.6 0.6-1.7 0.2-1.7-0.7v-21.3c-0.1-0.8-0.9-1.5-1.6-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v21.2c0 0.9-1.1 1.3-1.7 0.7l-5.6-5.6c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.2c-0.6 0.6-0.6 1.5 0 2.1l13.5 13.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(download_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
