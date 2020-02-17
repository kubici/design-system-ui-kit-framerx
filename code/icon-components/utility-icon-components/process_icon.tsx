
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function process_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m16.2 23.2l8.5-10.6c0.6-0.8 1.8-0.8 2.4 0l8.5 10.7c0.3 0.4 0.7 0.7 1.2 0.7h9.6c0.8 0 1.6-0.7 1.6-1.5v-14.5c0-2.2-1.9-4-4.1-4h-35.9c-2.2 0-4 1.8-4 4v14.5c0 0.8 0.7 1.5 1.5 1.5h9.5c0.5 0 0.9-0.4 1.2-0.8z m19.5 5.6l-8.5 10.6c-0.6 0.8-1.8 0.8-2.4 0l-8.5-10.7c-0.4-0.3-0.8-0.7-1.3-0.7h-9.5c-0.8 0-1.5 0.7-1.5 1.5v14.5c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4v-14.5c0-0.8-0.7-1.5-1.5-1.5h-9.6c-0.5 0-0.9 0.4-1.2 0.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(process_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
