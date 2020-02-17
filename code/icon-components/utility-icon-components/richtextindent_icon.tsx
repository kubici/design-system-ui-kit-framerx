
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function richtextindent_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m52 11.5c0-0.8-0.7-1.5-1.5-1.5h-17c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-3z m-4 24c0-0.8-0.7-1.5-1.5-1.5h-13c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h13c0.8 0 1.5-0.7 1.5-1.5v-3z m4-12c0-0.8-0.7-1.5-1.5-1.5h-17c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-3z m-24-18c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v41c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-41z m-18.6 9.8c-0.6-0.6-1.4-0.1-1.4 0.9v5.8h-6.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h6.5v5.9c0 1 0.9 1.5 1.4 0.9l8.3-9c0.3-0.4 0.3-1 0-1.4l-8.3-9.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(richtextindent_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
