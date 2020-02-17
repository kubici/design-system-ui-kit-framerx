
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function list_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m8 10.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-3z m42 0c0-0.8-0.7-1.5-1.5-1.5h-35c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h35c0.8 0 1.5-0.7 1.5-1.5v-3z m-42 14c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-3z m38 0c0-0.8-0.7-1.5-1.5-1.5h-31c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h31c0.8 0 1.5-0.7 1.5-1.5v-3z m-38 14c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-3z m42 0c0-0.8-0.7-1.5-1.5-1.5h-35c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h35c0.8 0 1.5-0.7 1.5-1.5v-3z"/>
	</g>
</svg>
  );
};

addPropertyControls(list_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
