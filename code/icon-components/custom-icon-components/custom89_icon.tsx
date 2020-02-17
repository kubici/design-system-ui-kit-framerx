
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom89_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m57.9 43.4c-0.4-0.5-1.2-0.4-1.5 0.2-1.2 1.7-2.4 4.3-2.4 7.4v11c0 1.6-1.3 3-3 3-1.6 0-3-1.3-3-3v-34.2c0-7.7-6.7-8.9-11.6-7-1.3 0.4-2.5 1.2-3.4 2.2-0.6 0.7-1.3 1.3-2.2 1.6-1.8 0.6-4.9-1.1-6.5-2.1-0.9-0.5-2.1-0.3-2.7 0.5l-1.2 1.7c-0.7 0.9-0.4 2.3 0.5 2.9 1.9 1.2 4.9 3.1 7.2 3.5 3.5 0.6 6.7-0.5 9.3-2.9l-0.1 0.1c0.7-0.6 1.9-1.6 2.7-0.5 2 3-6 16.1-6 35.2v1.6c0 8.1 8.2 15.1 16.3 15.5 8.6 0.4 15.7-6.5 15.7-15 0-4.3 1.6-7.1 3.2-8.8 0.4-0.4 0.4-1 0-1.4l-11.3-11.5z m19.1 9.6c-0.8 0-1.5-0.3-2.1-0.9l-16-16c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0l16 16c1.2 1.2 1.2 3.1 0 4.2-0.6 0.6-1.3 0.9-2.1 0.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom89_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
