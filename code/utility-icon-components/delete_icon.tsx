
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function delete_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m45.5 10h-12.5v-4c0-2.2-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4v4h-12.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h39c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-22.5-3c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1v3h-6v-3z m18.5 13h-31c-0.8 0-1.5 0.7-1.5 1.5v23.5c0 2.8 2.2 5 5 5h24c2.8 0 5-2.2 5-5v-23.5c0-0.8-0.7-1.5-1.5-1.5z m-18.5 22c0 0.6-0.4 1-1 1h-2c-0.6 0-1-0.4-1-1v-14c0-0.6 0.4-1 1-1h2c0.6 0 1 0.4 1 1v14z m10 0c0 0.6-0.4 1-1 1h-2c-0.6 0-1-0.4-1-1v-14c0-0.6 0.4-1 1-1h2c0.6 0 1 0.4 1 1v14z"/>
	</g>
</svg>
  );
};

addPropertyControls(delete_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  