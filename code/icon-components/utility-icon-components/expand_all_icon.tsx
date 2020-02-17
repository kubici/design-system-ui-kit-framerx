
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function expand_all_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48 9.5c0-0.8-0.7-1.5-1.5-1.5h-41c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-3z m0 30c0-0.8-0.7-1.5-1.5-1.5h-41c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-3z m-18-10.5h4.5c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-4.5c-0.6 0-1-0.4-1-1v-4.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v4.5c0 0.6-0.4 1-1 1h-4.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h4.5c0.6 0 1 0.4 1 1v4.5c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-4.5c0-0.6 0.4-1 1-1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(expand_all_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
