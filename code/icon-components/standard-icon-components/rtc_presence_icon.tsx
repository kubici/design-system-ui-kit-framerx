
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function rtc_presence_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" {...props}>
	<path d="m61.5 19.8c-11.1 0-20.2 8.6-20.2 19.2a18.8 18.8 0 0 0 2.6 9.5 1.6 1.6 0 0 1 0.2 1.1l-2 6.2a1.4 1.4 0 0 0 1.8 1.7l5.9-2.1a1.5 1.5 0 0 1 1.1 0.1 20.8 20.8 0 0 0 10.6 2.9c11.2 0 20.3-8.7 20.3-19.3s-9.1-19.3-20.2-19.3z m-15.7 56.4v1.3a2.8 2.8 0 0 1-2.8 2.8h-22a2.8 2.8 0 0 1-2.8-2.8v-1.3c0-3.3 4-5.4 7.6-7a1.4 1.4 0 0 0 0.4-0.2 0.8 0.8 0 0 1 0.9 0 9 9 0 0 0 5 1.5 9.4 9.4 0 0 0 5-1.4 0.8 0.8 0 0 1 0.8 0 1.4 1.4 0 0 1 0.4 0.2c3.6 1.5 7.5 3.5 7.5 6.9z" fill={props.fill}/>
	<ellipse cx="32.01" cy="60.26" fill={props.fill} rx="6.85" ry="7.58"/>
</svg>
  );
};

addPropertyControls(rtc_presence_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
