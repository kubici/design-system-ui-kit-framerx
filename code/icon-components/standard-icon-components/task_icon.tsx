
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function task_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46.6 23.7l-2.1-2.1c-0.6-0.6-1.5-0.6-2.1 0l-13.2 13.2-5.3-5.3c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l7.4 7.4c0.6 0.6 1.4 0.9 2.1 0.9 0.8 0 1.5-0.3 2.1-0.9l15.3-15.3c0.5-0.5 0.5-1.5 0-2.1z m30.4 14.3h-26c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h26c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z m0 18h-32c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h32c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z m-44 0h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z m0 18h-4c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z m44 0h-32c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h32c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(task_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
