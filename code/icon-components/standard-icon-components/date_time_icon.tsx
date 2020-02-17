
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function date_time_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m72 26h-5v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-18v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-5c-3.3 0-6 2.7-6 6v2c0 1.1 0.9 2 2 2h52c1.1 0 2-0.9 2-2v-2c0-3.3-2.7-6-6-6z m4 16h-52c-1.1 0-2 0.9-2 2v30c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-30c0-1.1-0.9-2-2-2z m-26 33.9c-8.2 0-14.9-6.7-14.9-14.9s6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9-6.7 14.9-14.9 14.9z m1.5-15.5v-6.4c0-0.5-0.4-1-1-1h-1c-0.5 0-1 0.4-1 1v7c0 0.4 0.1 0.8 0.4 1l4.8 4.8c0.4 0.4 1 0.4 1.4 0l0.7-0.7c0.4-0.4 0.4-1 0-1.4l-4.3-4.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(date_time_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
