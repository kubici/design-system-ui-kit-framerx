
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function chat_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 4c-13.3 0-23.9 9.8-23.9 21.9 0 3.8 1.1 7.4 2.9 10.6 0.3 0.5 0.4 1.1 0.2 1.7l-3.1 8.5c-0.3 0.8 0.5 1.5 1.3 1.3l8.6-3.3c0.5-0.2 1.1-0.1 1.7 0.2 3.6 2 7.9 3.2 12.5 3.2 13.1-0.1 23.8-9.8 23.8-22-0.1-12.3-10.8-22.1-24-22.1z m-12 26c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z m12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z m12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(chat_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
