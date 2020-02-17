
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function touch_action_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m37.8 29.8l-8.2-2.8c-0.6-0.2-1.1-0.8-1.1-1.5v-10.9c0-1.7-1.4-3-3.1-3h-0.3c-1.7 0-3.1 1.4-3.1 3v21.5c0 1.8-2.3 2.6-3.3 1l-2.1-4.4c-1.1-1.9-3.6-2.4-5.4-1.1l-1.3 1 6.9 16.3c0.3 0.7 1 1.1 1.8 1.1h18.1c0.9 0 1.6-0.6 1.8-1.4l3.2-11.4c0.8-3.2-1-6.3-3.9-7.4z m-20.6-6.8v-8.6c0.2-4.1 3.5-7.4 7.6-7.6h0.8c4.1 0.2 7.4 3.5 7.6 7.6v8.6c0 0.7 0.9 1 1.4 0.6 2.2-2.3 3.5-5.4 3.5-8.7 0-7.4-6.4-13.4-14-12.7-5.8 0.6-10.6 5-11.5 10.7-0.6 4 0.6 7.9 3.3 10.7 0.4 0.4 1.3 0.1 1.3-0.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(touch_action_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  