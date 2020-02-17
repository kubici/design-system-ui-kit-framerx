
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function pin_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.5 15.4l-13.5-13.5c-1.4-1.4-3.6-1.4-5 0s-1.4 3.6 0 5l0.7 0.7-16.2 10.7-0.5-0.5c-1.4-1.4-3.6-1.4-5 0s-1.4 3.6 0 5l7.2 7.2-14.8 14.8c-1.4 1.4-1.4 3.7 0 5.1 1.4 1.4 3.7 1.4 5.1 0l14.8-14.9 6.3 6.3c1.4 1.4 3.6 1.4 5 0s1.4-3.6 0-5l-0.5-0.5 10.6-16.3 0.7 0.7c1.4 1.4 3.6 1.4 5 0 1.4-1.2 1.4-3.4 0.1-4.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(pin_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
