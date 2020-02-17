
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function process_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m37.6 46.3l10.8-13.4c0.8-1 2.3-1 3.1 0l10.8 13.4c0.4 0.5 1 0.7 1.6 0.7h12.1c1.1 0 2-0.9 2-2v-17c0-3.3-2.7-6-6-6h-44c-3.3 0-6 2.7-6 6v17c0 1.1 0.9 2 2 2h12c0.6 0 1.2-0.3 1.6-0.7z m24.7 7.4l-10.8 13.4c-0.8 1-2.3 1-3.1 0l-10.8-13.4c-0.4-0.5-1-0.7-1.6-0.7h-12c-1.1 0-2 0.9-2 2v17c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-17c0-1.1-0.9-2-2-2h-12.1c-0.6 0-1.2 0.3-1.6 0.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(process_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
