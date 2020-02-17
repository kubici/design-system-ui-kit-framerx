
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function answer_private_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m89 84c-1.1 0-2 0.9-2 2v1h4v-1c0-1.1-0.9-2-2-2z" fill={props.fill} fillOpacity=".65"/>
	<path d="m100 100v-38l-38 38h38z m-5-6.5c0 0.8-0.7 1.5-1.5 1.5h-9c-0.8 0-1.5-0.7-1.5-1.5v-5c0-0.8 0.7-1.5 1.5-1.5h0.5v-1c0-2.2 1.8-4 4-4s4 1.8 4 4v1h0.5c0.8 0 1.5 0.7 1.5 1.5v5z" fill={props.fill} fillOpacity=".65"/>
	<path d="m49.9 22c-16.6 0-30 12.5-30 28 0 5 1.4 9.6 3.8 13.7 0.3 0.5 0.4 1.1 0.2 1.6l-2.8 8.9c-0.5 1.6 1 3 2.6 2.5l8.8-3.1c0.6-0.2 1.2-0.1 1.7 0.2 4.6 2.7 10 4.2 15.8 4.2 16.6 0 30-12.5 30-28-0.1-15.5-13.4-28-30.1-28z m14.5 21.8l-15.3 15.3c-0.6 0.6-1.3 0.9-2.1 0.9s-1.5-0.3-2.1-0.9l-7.4-7.4c-0.6-0.6-0.6-1.5 0-2.1l2.1-2.1c0.6-0.6 1.5-0.6 2.1 0l5.3 5.3 13.2-13.2c0.6-0.6 1.5-0.6 2.1 0l2.1 2.1c0.5 0.6 0.5 1.6 0 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(answer_private_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
