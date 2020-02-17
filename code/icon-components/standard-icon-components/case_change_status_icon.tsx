
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function case_change_status_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m38 30h4c0.6 0 1-0.4 1-1v-3h14v3c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-3c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v3c0 0.6 0.4 1 1 1z m36 6h-48c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-32c0-3.3-2.7-6-6-6z m-15.5 22.1l-10.5 12.6c-0.6 0.6-1.6 0.1-1.4-0.7l2.6-9h-6.9c-0.8 0-1.4-0.8-1.1-1.6l4.2-10.8c0.4-0.9 1.2-1.5 2.2-1.5h8.3c0.9 0 1.5 0.9 1 1.7l-4.5 7.2h5.2c1 0 1.6 1.3 0.9 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(case_change_status_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
