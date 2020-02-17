
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function merge_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m70.5 72.5c-7-3.4-12-9.4-14.5-16.3-1-2.6-1.6-5.3-1.9-7.9v-4.4h13.6c1.1 0 1.7-1.2 1-2.2l-17.7-21.2c-0.6-0.8-2-0.8-2.5 0l-17.3 21.2c-0.6 0.8 0 2.2 1 2.2h13.7v4.4c-0.3 2.7-1 5.5-1.9 7.9-2.6 6.8-7.5 12.9-14.5 16.3-1 0.4-1.4 1.6-1 2.6l1.6 3.8c0.5 1.1 1.6 1.4 2.7 0.8 7.6-3.6 13.5-9.4 17.2-16.2 3.7 6.9 9.6 12.6 17.3 16.2 1.1 0.5 2.2 0.4 2.7-0.8l1.6-3.8c0.4-1-0.1-2.2-1.1-2.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(merge_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
