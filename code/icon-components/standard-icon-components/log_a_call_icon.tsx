
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function log_a_call_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m69.7 20h-37.6c-3.3 0-6.1 3-6.1 6v2h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v10h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v10h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v2c0 3 2.8 6 6.1 6h37.6c3.3 0 6.3-3 6.3-6.3v-48c0-3.3-3-5.7-6.3-5.7z m-3.6 40.3l-2.8 2.8c-0.6 0.6-1.5 1-2.3 0.9-6.6-0.4-12.8-3.4-17.2-7.7-4.4-4.4-7.4-10.6-7.7-17.2 0-0.9 0.3-1.7 0.9-2.3l2.8-2.8c1.3-1.3 3.5-1.2 4.6 0.3l2.6 3.2c0.9 1.1 0.9 2.6 0.1 3.8l-2.2 3.1c-0.3 0.4-0.3 1 0.1 1.3l4.6 5.1 5.1 4.6c0.4 0.4 0.9 0.4 1.3 0.1l3.1-2.2c1.1-0.8 2.7-0.8 3.8 0.1l3.2 2.6c1.2 0.8 1.3 3 0 4.3z" fill={props.fill}/>
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
  
