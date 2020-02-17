
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function bold_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m41 19c0-6-4.8-11-10.5-11h-16.5c-1.1 0-2 0.9-2 2v33c0 1.1 0.9 2 2 2h16.5c5.7 0 10.5-5 10.5-11 0-2.9-1.1-5.5-2.9-7.5 1.8-2 2.9-4.6 2.9-7.5z m-10.5 19h-11.5v-8h11.5c1.9 0 3.6 1.9 3.6 4s-1.7 4-3.6 4z m0-15h-11.5v-8h11.5c1.9 0 3.6 1.9 3.6 4s-1.7 4-3.6 4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(bold_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
