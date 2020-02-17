
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function inbox_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 8c0-2.2-1.8-4-4-4h-40c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-36z m-31 27c0 0.6-0.4 1-1 1h-9c-0.6 0-1-0.4-1-1v-4c0-0.6 0.4-1 1-1h9c0.6 0 1 0.4 1 1v4z m0-10c0 0.6-0.4 1-1 1h-9c-0.6 0-1-0.4-1-1v-4c0-0.6 0.4-1 1-1h9c0.6 0 1 0.4 1 1v4z m0-10c0 0.6-0.4 1-1 1h-9c-0.6 0-1-0.4-1-1v-4c0-0.6 0.4-1 1-1h9c0.6 0 1 0.4 1 1v4z m25 26c0 0.6-0.4 1-1 1h-19c-0.6 0-1-0.4-1-1v-30c0-0.6 0.4-1 1-1h19c0.6 0 1 0.4 1 1v30z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(inbox_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
