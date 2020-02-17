
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function instore_locations_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m32.1 70.1c-0.6 0-1.2-0.5-1.2-1.2v-7.3c0-0.6 0.5-1.2 1.2-1.2h7.5c0.6 0 1.2 0.5 1.2 1.2v7.4c0 0.6-0.5 1.2-1.2 1.2h-7.5z m14.2 0c-0.6 0-1.2-0.5-1.2-1.2v-11.2c0-0.6 0.5-1.2 1.2-1.2h7.5c0.6 0 1.2 0.5 1.2 1.2v11.3c0 0.6-0.5 1.2-1.2 1.2h-7.5z m14.2 0c-0.6 0-1.2-0.5-1.2-1.2v-7.3c0-0.6 0.5-1.2 1.2-1.2h7.5c0.6 0 1.2 0.5 1.2 1.2v7.4c0 0.6-0.5 1.2-1.2 1.2h-7.5z m-28.4-27.2c-0.6 0-1.2-0.5-1.2-1.2v-10.6c0-0.6 0.5-1.2 1.2-1.2h21.7c0.6 0 1.2 0.5 1.2 1.2v10.7c0 0.6-0.5 1.2-1.2 1.2h-21.7z m28.4 0c-0.6 0-1.2-0.5-1.2-1.2v-7.3c0-0.6 0.5-1.2 1.2-1.2h7.5c0.6 0 1.2 0.5 1.2 1.2v7.3c0 0.6-0.5 1.2-1.2 1.2h-7.5z m13.3-22.9h-47.6c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2v-47.6c0-3.4-2.8-6.2-6.2-6.2z m0 51.7c0 1.2-0.9 2.1-2.1 2.1h-43.4c-1.1 0-2.1-0.9-2.1-2.1v-19h47.6v19z m0-25h-47.6v-18.4c0-1.2 0.9-2.1 2.1-2.1h43.4c1.1 0 2.1 0.9 2.1 2.1v18.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(instore_locations_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
