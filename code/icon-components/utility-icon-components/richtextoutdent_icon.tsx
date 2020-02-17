
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function richtextoutdent_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m16.4 22h-6.4v-5.9c0-1-0.9-1.5-1.4-0.9l-8.3 9c-0.3 0.4-0.3 1 0 1.4l8.3 9c0.6 0.6 1.4 0.1 1.4-0.9v-5.7h6.4c0.8 0 1.6-0.7 1.6-1.5v-3c0-0.8-0.8-1.5-1.6-1.5z m35.6-10.5c0-0.8-0.7-1.5-1.5-1.5h-17c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-3z m-4 24c0-0.8-0.7-1.5-1.5-1.5h-13c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h13c0.8 0 1.5-0.7 1.5-1.5v-3z m4-12c0-0.8-0.7-1.5-1.5-1.5h-17c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-3z m-24-18c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v41c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-41z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(richtextoutdent_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
