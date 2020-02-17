
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function script_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44 6.8c-8.8 0-15.6 6.9-15.6 15.7v21.1c0 0.8 0.7 1.5 1.5 1.5h16.7c0.8 0 1.5-0.7 1.5-1.5v-16.6c0-0.8-0.7-1.5-1.5-1.5h-12.4v-2.9c0-4.9 4.8-9.8 9.7-9.8h2.6c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-2.5z m-24.4 0c-8.8 0-15.6 6.9-15.6 15.8v21.1c0 0.8 0.7 1.5 1.5 1.5h16.7c0.8 0 1.5-0.7 1.5-1.5v-16.7c0-0.8-0.7-1.5-1.5-1.5h-12.3v-2.9c0-4.9 4.8-9.8 9.7-9.8h2.6c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-2.6z" fill={props.fill}/>
	<path d="m30.4 8.3"/>
</svg>
  );
};

addPropertyControls(script_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
