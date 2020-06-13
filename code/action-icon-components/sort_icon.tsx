
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function sort_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m27.5 16c0.6-0.6 0.6-1.5 0-2.1l-11.4-11.5c-0.6-0.6-1.5-0.6-2.1 0l-11.5 11.5c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l3.6-3.6c0.6-0.6 1.7-0.2 1.7 0.7v21.2c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.8 1.5-1.5v-21.2c0-0.9 1.1-1.3 1.7-0.7l3.6 3.6c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1z m22 20l-2.1-2c-0.6-0.6-1.5-0.6-2.1 0l-3.6 3.6c-0.6 0.6-1.7 0.2-1.7-0.7v-21.4c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.8-1.5 1.5v21.2c0 0.9-1.1 1.3-1.7 0.7l-3.6-3.6c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.2c-0.6 0.6-0.6 1.5 0 2.1l11.5 11.5c0.6 0.6 1.5 0.6 2.1 0l11.5-11.5c0.5-0.6 0.5-1.6-0.1-2.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(sort_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  