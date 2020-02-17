
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function case_log_a_call_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m38 30h4c0.6 0 1-0.4 1-1v-3h14v3c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-3c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v3c0 0.6 0.4 1 1 1z m36 6h-48c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-32c0-3.3-2.7-6-6-6z m-11.7 30.1l-2.2 2.2c-0.5 0.5-1.1 0.7-1.8 0.7-5.1-0.3-9.9-2.6-13.3-6-3.4-3.4-5.7-8.2-6-13.3 0-0.7 0.2-1.3 0.7-1.8l2.2-2.2c1-1 2.7-0.9 3.6 0.2l2 2.5c0.7 0.8 0.7 2 0.1 2.9l-1.7 2.4c-0.2 0.3-0.2 0.8 0.1 1l3.5 3.9 3.9 3.5c0.3 0.3 0.7 0.3 1 0.1l2.4-1.7c0.9-0.6 2.1-0.6 2.9 0.1l2.5 2c1 0.8 1.1 2.5 0.1 3.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(case_log_a_call_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
