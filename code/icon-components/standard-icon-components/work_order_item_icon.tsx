
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function work_order_item_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m39 32h22c1.1 0 2-0.9 2-2v-4c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v4c0 1.1 0.9 2 2 2z m33-7h-2c-0.6 0-1 0.4-1 1v4c0 4.4-3.6 8-8 8h-22c-4.4 0-8-3.6-8-8v-4c0-0.6-0.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-43c0-3.3-2.7-6-6-6z m-5.2 24l-19.2 19.2c-0.5 0.5-1.1 0.8-1.8 0.8s-1.4-0.3-1.9-0.8l-10.7-10.7c-0.5-0.5-0.5-1.1 0-1.6l2.1-2.1c0.5-0.5 1.1-0.5 1.6 0l8.8 8.8 17.3-17.3c0.5-0.5 1.1-0.5 1.6 0l2.1 2.1c0.5 0.5 0.5 1.2 0.1 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(work_order_item_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
