
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function forward_up_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m8.2 49.6l31.5-31.5c0.9-0.9 2.3-0.2 2.3 0.9v18.2c0 1.1 0.9 2 2 2h4.2c1.1 0 2-0.9 2-2l-0.2-33.1c0-1.1-0.9-2-2-2h-33.2c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h18.2c1.2 0.1 1.9 1.5 1 2.4l-31.4 31.4c-0.8 0.8-0.9 2-0.1 2.7l2.8 2.8c0.8 0.8 2.1 1 2.9 0.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(forward_up_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
