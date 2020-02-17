
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function log_a_call_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m43 2h-29.5c-2.6 0-4.8 2.4-4.8 4.8v1.6h-1.6c-1.7 0-3.1 1.4-3.1 3.2s1.4 3.2 3.1 3.2h1.6v8h-1.6c-1.7 0-3.1 1.4-3.1 3.2s1.4 3.2 3.1 3.2h1.6v8h-1.6c-1.7 0-3.1 1.4-3.1 3.2 0 1.8 1.4 3.2 3.1 3.2h1.6v1.6c0 2.4 2.2 4.8 4.8 4.8h29.5c2.6 0 5-2.4 5-5v-38.4c0-2.7-2.4-4.6-5-4.6z m-2.8 32.2l-2.2 2.3c-0.5 0.5-1.2 0.8-1.8 0.7-5.2-0.3-10-2.7-13.5-6.2s-5.8-8.5-6.1-13.8c0-0.7 0.2-1.4 0.7-1.8l2.2-2.2c1-1 2.7-1 3.6 0.2l2 2.6c0.7 0.9 0.7 2.1 0.1 3l-1.7 2.5c-0.2 0.3-0.2 0.8 0.1 1l3.6 4.1 4 3.7c0.3 0.3 0.7 0.3 1 0.1l2.4-1.8c0.9-0.6 2.1-0.6 3 0.1l2.5 2.1c1.1 0.6 1.1 2.4 0.1 3.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(log_a_call_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
