
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function setup_assistant_guide_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m11.5 24.9c0-0.4-0.5-0.6-0.8-0.4l-4.5 3.7c-0.2 0.2-0.2 0.5-0.2 0.8v15.9c0 1 1.4 1.5 2.3 0.8l7.3-5.7c0.2-0.2 0.3-0.4 0.1-0.7-1.8-2.7-3.6-7.2-4.2-14.4z m9.7 14.9c0.2 0.1 0.4 0.2 0.6 0.2h8.3c0.2 0 0.4-0.1 0.6-0.2 1.2-0.8 6-4.8 6-18.4 0-6.3-1.8-10.7-3.9-13.7-3.1-4.4-6.8-5.7-6.8-5.7s-3.8 1.3-6.9 5.8c-2.1 3-3.8 7.3-3.8 13.6 0 13.6 4.7 17.6 5.9 18.4z m4.7-26.8c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z m19.8 15.2l-4.4-3.7c-0.3-0.3-0.8-0.1-0.8 0.4-0.6 7.2-2.4 11.7-4.1 14.5-0.1 0.2-0.1 0.5 0.1 0.7l7.3 5.7c0.9 0.7 2.2 0.2 2.2-0.8v-16c0-0.3 0-0.6-0.3-0.8z m-13.5 16.3c-0.2-0.3-0.5-0.5-0.8-0.5h-11c-0.3 0-0.7 0.2-0.8 0.5-0.4 0.6-1 1.7-1.4 3.1-0.3 1.2 0.7 2.4 2 2.4h11.4c1.3 0 2.3-1.2 2-2.4-0.4-1.5-1-2.6-1.4-3.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(setup_assistant_guide_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
