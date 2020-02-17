
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function refresh_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46.5 4h-3c-0.8 0-1.5 0.7-1.5 1.5v7c0 0.9-0.5 1.3-1.2 0.7-0.3-0.4-0.6-0.7-1-1-5-5-12-7.1-19.2-5.7-2.5 0.5-4.9 1.5-7 2.9-6.1 4-9.6 10.5-9.7 17.5-0.1 5.4 2 10.8 5.8 14.7 4 4.2 9.4 6.5 15.2 6.5 5.1 0 9.9-1.8 13.7-5 0.7-0.6 0.7-1.6 0.1-2.2l-2.1-2.1c-0.5-0.5-1.4-0.6-2-0.1-3.6 3-8.5 4.2-13.4 3-1.3-0.3-2.6-0.9-3.8-1.6-5.7-3.5-8.4-10.1-6.8-16.7 0.3-1.3 0.9-2.6 1.6-3.8 2.8-4.9 7.7-7.6 12.9-7.6 4 0 7.8 1.6 10.6 4.4 0.5 0.4 0.9 0.9 1.2 1.4 0.3 0.8-0.4 1.2-1.3 1.2h-7c-0.8 0-1.5 0.7-1.5 1.5v3.1c0 0.8 0.6 1.4 1.4 1.4h18.3c0.7 0 1.3-0.6 1.3-1.3v-18.2c-0.1-0.8-0.8-1.5-1.6-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(refresh_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
