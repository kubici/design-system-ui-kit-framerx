
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom90_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m77.4 26l-24.4 3.6v34.4c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-33.5l-23.6 3.5h-0.4c-1.5 0-2.8-1.1-3-2.6-0.2-1.6 0.9-3.2 2.5-3.4l18.6-2.8c1.7-3.1 5-5.3 8.8-5.3 2.8 0 5.2 1.1 7 2.9l19.7-2.8c1.6-0.2 3.2 0.9 3.4 2.5 0.2 1.7-0.9 3.2-2.6 3.5z m-36.1 36.9c0.7-0.9 0.9-2 0.4-3.1l-8-19c-0.4-1.1-1.5-1.8-2.7-1.8s-2.3 0.7-2.8 1.8l-8 19c-0.4 0.9-0.3 1.9 0.2 2.8 0.2 0.3 4.1 6.3 10.4 6.3 3.7 0 7.3-2 10.5-6z m-10.3-13.2l4.3 10.3h-8.6l4.3-10.3z m40.8-14.9c-0.5-1.1-1.6-1.8-2.8-1.8s-2.3 0.7-2.8 1.8l-8 19c-0.4 0.9-0.3 1.9 0.2 2.8 0.2 0.3 4.1 6.3 10.4 6.3 3.7 0 7.2-2 10.5-6 0.7-0.9 0.9-2 0.4-3.1l-7.9-19z m-2.8 8.9l4.3 10.3h-8.6l4.3-10.3z m-19 27.3c-5.6 0-11.3 2-15.3 5.4-0.4 0.4-0.7 0.9-0.7 1.5v0.1c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-0.1c0-0.6-0.2-1.1-0.7-1.5-4-3.4-9.7-5.4-15.3-5.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom90_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  