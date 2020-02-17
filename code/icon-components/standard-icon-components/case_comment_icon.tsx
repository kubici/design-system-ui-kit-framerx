
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function case_comment_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m38 30h4c0.6 0 1-0.4 1-1v-3h14v3c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-3c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v3c0 0.6 0.4 1 1 1z m36 6h-48c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-32c0-3.3-2.7-6-6-6z m-23.1 32c-2.3 0-4.4-0.6-6.2-1.6-0.2-0.1-0.4-0.1-0.7-0.1l-4 1.7c-0.6 0.2-1.2-0.4-1-1l1.7-4.1c0.1-0.2 0-0.5-0.1-0.6-1-1.6-1.5-3.4-1.5-5.4 0-6.1 5.3-11 11.8-11s11.8 4.9 11.8 11c0 6.2-5.3 11.1-11.8 11.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(case_comment_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
