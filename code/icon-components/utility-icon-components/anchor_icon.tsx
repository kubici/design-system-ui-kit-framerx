
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function anchor_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m48 35.7l-2.4-10.2c-0.3-1.1-1.7-1.5-2.5-0.8l-7.7 7.1c-0.9 0.8-0.5 2.2 0.6 2.5l3.3 1c-0.3 0.7-0.6 1.4-1 2-1.8 3-4.7 4.9-9.3 5.5v-25c2.6-1.1 4.4-3.7 4.4-6.7 0-4-3.3-7.3-7.3-7.3-4.1 0-7.3 3.3-7.3 7.3 0 3 1.8 5.5 4.4 6.7v25c-4.6-0.6-7.5-2.5-9.3-5.5-0.4-0.7-0.7-1.3-1-2l3.3-1c1.1-0.3 1.4-1.8 0.6-2.5l-7.8-7c-0.9-0.8-2.2-0.4-2.5 0.8l-2.5 10.1c-0.3 1.1 0.8 2.1 1.9 1.8l2.6-0.8c0.4 1.1 0.8 2.1 1.4 3.1 2.9 4.9 8.2 7.8 16 7.8s13-2.9 16-7.8c0.6-1 1.1-2.1 1.4-3.1l2.6 0.8c1.3 0.3 2.3-0.7 2.1-1.8z m-22-21.5c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9-1.3 2.9-2.9 2.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(anchor_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
