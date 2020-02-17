
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function opportunity_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m71.1 69h-42.2c-1 0-1.9 0.9-1.9 1.9v0.1c0 3.3 2.7 6 6 6h34c3.3 0 6-2.7 6-6v-0.1c0-1-0.9-1.9-1.9-1.9z m4.9-41c-3.3 0-6 2.7-6 6 0 1.8 0.8 3.5 2.1 4.6-1.7 3.9-5.6 6.6-10.2 6.4-5.3-0.3-9.6-4.6-9.9-9.9 0-0.9 0-1.7 0.2-2.5 2.2-0.9 3.8-3 3.8-5.6 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.5 1.6 4.7 3.8 5.6 0.2 0.8 0.2 1.6 0.2 2.5-0.3 5.3-4.6 9.6-9.9 9.9-4.6 0.3-8.6-2.5-10.2-6.4 1.3-1.1 2.1-2.8 2.1-4.6 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6l2.8 21.4c0.1 0.9 0.9 1.6 1.9 1.6h42.6c0.9 0 1.7-0.7 1.9-1.6l2.8-21.4c3.3 0 6-2.7 6-6s-2.7-6-6-6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(opportunity_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
