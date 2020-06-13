
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom29_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m73.9 28h-1.8c-1.2 0-2.1 1-2.1 2.2v39.8c0 0.1 0 0.3 0.1 0.4l2.5 3.5c0.2 0.2 0.5 0.2 0.8 0l2.5-3.5c0.1-0.1 0.1-0.2 0.1-0.4v-39.8c0-1.2-0.9-2.2-2.1-2.2z m-15.9-8h-28c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h28c3.3 0 6-2.7 6-6v-48c0-3.3-2.7-6-6-6z m-14 58c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m14-10c0 1.1-0.9 2-2 2h-24c-1.1 0-2-0.9-2-2v-38c0-1.1 0.9-2 2-2h24c1.1 0 2 0.9 2 2v38z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom29_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  