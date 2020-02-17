
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom39_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m63.6 28.6c-0.2-0.8-1.1-1.3-1.9-1.1l-40.3 13c-1 0.3-1.5 1.4-1.3 2.4l1.6 6.2c0.3 1 1.3 1.7 2.3 1.5l10.2-1.4c0.3 1.1 0.8 2.2 1.5 3.1l-8.7 23.6c-0.6 1.6 0.2 3.3 1.8 3.9 0.3 0.1 0.7 0.2 1 0.2 1.2 0 2.4-0.8 2.8-2l8.2-22.4c0.7 0.2 1.3 0.2 2 0.2s1.4-0.1 2-0.2l8.3 22.4c0.4 1.2 1.6 2 2.8 2 0.3 0 0.7-0.1 1-0.2 1.6-0.6 2.4-2.3 1.8-3.9l-8.7-23.7c1.1-1.5 1.8-3.4 1.8-5.4v-0.1l14.1-2c0.9-0.1 1.5-1 1.2-1.9l-3.5-14.2z m16.3 14.1l-5.5-20.4c-0.4-1.6-2.1-2.6-3.7-2.2-1.6 0.4-2.6 2.1-2.2 3.7l5.5 20.4c0.4 1.6 2.1 2.6 3.7 2.2 1.6-0.4 2.6-2.1 2.2-3.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom39_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  