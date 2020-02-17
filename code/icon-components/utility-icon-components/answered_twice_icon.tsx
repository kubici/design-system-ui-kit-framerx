
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function answered_twice_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m17.6 11.4c-8.9 0-16 6.5-16 14.7 0 2.6 0.7 5 2 7.2 0.1 0.3 0.2 0.6 0.1 0.9l-1.5 4.6c-0.3 0.9 0.5 1.6 1.4 1.3l4.7-1.6c0.3-0.1 0.7-0.1 0.9 0.1 2.5 1.4 5.3 2.2 8.4 2.2 8.9 0 16-6.5 16-14.7s-7.2-14.7-16-14.7z m7.7 11.4l-8.1 8c-0.3 0.3-0.7 0.5-1.1 0.5-0.4 0-0.8-0.1-1.1-0.5l-4-3.9c-0.3-0.3-0.3-0.8 0-1.1l1.1-1.1c0.3-0.3 0.8-0.3 1.1 0l2.8 2.8 7-6.9c0.3-0.3 0.8-0.3 1.1 0l1.1 1.1c0.4 0.3 0.4 0.8 0.1 1.1z m9-11.4h-4.2c4.7 3.4 8.2 8.8 8.2 14.7 0 5.9-3.7 11.5-8.2 14.7h4.2c8.9 0 16-6.5 16-14.7-0.1-8.2-7.2-14.7-16-14.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(answered_twice_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
