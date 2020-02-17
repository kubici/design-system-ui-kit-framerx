
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function magicwand_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m28.2 21c-0.4-0.4-1-0.4-1.4 0l-23.9 23.9c-1.2 1.2-1.2 3 0 4.2 1.2 1.2 3 1.2 4.2 0l23.9-23.9c0.4-0.4 0.4-1 0-1.4l-2.8-2.8z m7 0l3.2-3.2c0.6-0.6 0.6-1.5 0-2.1l-2.1-2.1c-0.6-0.6-1.5-0.6-2.1 0l-3.2 3.2c-0.4 0.4-0.4 1 0 1.4l2.8 2.8c0.4 0.4 1 0.4 1.4 0z m-24.8-9.4c3.8 1.2 6.8 4.1 8 8 0.2 0.6 1 0.6 1.2 0 1.2-3.8 4.1-6.8 8-8 0.6-0.2 0.6-1 0-1.2-3.8-1.2-6.8-4.1-8-8-0.2-0.6-1-0.6-1.2 0-1.2 3.8-4.1 6.8-8 8-0.5 0.2-0.5 1 0 1.2z m39.2 18.9c-3.4-1.1-6-3.7-7.1-7.1-0.2-0.5-0.9-0.5-1.1 0-1.1 3.4-3.7 6-7.1 7.1-0.5 0.2-0.5 0.9 0 1.1 3.4 1.1 6 3.7 7.1 7.1 0.2 0.5 0.9 0.5 1.1 0 1.1-3.4 3.7-6 7.1-7.1 0.5-0.2 0.5-1 0-1.1z m-11.3-22.1c2.6 0.8 4.5 2.7 5.3 5.3 0.1 0.4 0.7 0.4 0.8 0 0.8-2.6 2.7-4.5 5.3-5.3 0.4-0.1 0.4-0.7 0-0.8-2.6-0.8-4.5-2.7-5.3-5.3-0.1-0.4-0.7-0.4-0.8 0-0.8 2.6-2.7 4.5-5.3 5.3-0.4 0.1-0.4 0.7 0 0.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(magicwand_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  