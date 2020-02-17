
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function recent_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m28.1 48c-0.1 0.7-0.1 1.3-0.1 2h-6c0-0.7 0-1.3 0.1-2h6z m23.4-12h-3c-0.8 0-1.5 0.7-1.5 1.5v13.1c0 0.4 0.2 0.8 0.4 1.1l8.4 8.4c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-7-7.1v-11.3c0-0.8-0.7-1.5-1.5-1.5z m-1.5-14c-14.8 0-26.9 11.5-27.9 26 0 0.3-0.1 0.7-0.1 1h-4.5c-1.3 0-2 1.5-1.2 2.4l7.5 9.1c0.6 0.7 1.7 0.7 2.3 0l7.5-9.1c0.8-1 0.1-2.4-1.2-2.4h-4.4v-1c1-11.2 10.5-20 21.9-20 13 0 23.3 11.3 21.9 24.5-1 9.5-10 18.5-19.6 19.4-7.1 0.7-13.8-1.9-18.5-7-0.6-0.7-1.4-1.1-2.2-0.1l-2.4 2.9c-0.5 0.6-0.1 1 0.4 1.5 5.4 5.7 12.8 8.9 20.8 8.8 14.4-0.2 26.5-11.6 27.5-26 1.3-16.3-11.7-30-27.8-30z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(recent_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
