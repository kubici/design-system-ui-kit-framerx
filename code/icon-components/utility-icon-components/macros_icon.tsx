
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function macros_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m2.1 12.9" fill={props.fill}/>
	<path d="m37.2 40.2c-0.2 0.4-0.6 0.5-1 0.5h-4.7c-0.4 0-0.7-0.3-0.7-0.7 0-0.1 0.1-0.3 0.1-0.4l0.1-0.1 0.2-0.2 10.3-12.5c0.3-0.4 0.4-1 0.2-1.4 0-0.1-0.1-0.2-0.1-0.2l-10.7-12.7c-0.1-0.1-0.1-0.3-0.1-0.4 0-0.4 0.4-0.7 0.7-0.7h4.7c0.4 0 0.8 0.1 1 0.5l11.1 13.4c0.2 0.2 0.2 0.5 0.2 0.7 0 0.3-0.1 0.6-0.2 0.8l-11.1 13.4z m-11.6 0c-0.2 0.4-0.6 0.5-1 0.5h-4.7c-0.4 0-0.7-0.3-0.7-0.7 0-0.1 0.1-0.3 0.1-0.4l0.1-0.1 0.2-0.2 10.3-12.5c0.3-0.4 0.4-1 0.2-1.4 0-0.1-0.1-0.2-0.1-0.2l-10.7-12.7c-0.1-0.1-0.1-0.3-0.1-0.4 0-0.4 0.4-0.7 0.7-0.7h4.7c0.4 0 0.8 0.1 1 0.5l11.1 13.4c0.2 0.2 0.2 0.5 0.2 0.7 0 0.3-0.1 0.6-0.2 0.8l-11.1 13.4z m-11.6 0c-0.2 0.4-0.6 0.5-1 0.5h-8.8c-0.4 0-0.7-0.3-0.7-0.7 0-0.1 0.1-0.3 0.1-0.4l0.1-0.1 0.2-0.2 10.3-12.5c0.3-0.4 0.4-1 0.2-1.4 0-0.1-0.1-0.2-0.1-0.2l-10.7-12.7c-0.1-0.1-0.1-0.3-0.1-0.4 0-0.4 0.4-0.7 0.7-0.7h8.7c0.4 0 0.8 0.1 1 0.5l11.1 13.4c0.2 0.2 0.2 0.5 0.2 0.7 0 0.3-0.1 0.6-0.2 0.8l-11 13.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(macros_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
