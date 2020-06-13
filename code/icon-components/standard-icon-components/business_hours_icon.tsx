
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function business_hours_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m48.1 35.3h3.2c0.9 0 1.6 0.7 1.6 1.6v14c0 0.4-0.2 0.8-0.4 1.2l-9 9c-0.6 0.6-1.6 0.6-2.2 0l-2.2-2.2c-0.6-0.6-0.6-1.6 0-2.2l7.5-7.6v-12.1c-0.1-0.8 0.5-1.6 1.4-1.7h0.1z m36.4 13.9h-4.8c0-0.3-0.1-0.7-0.1-1.1-1.3-16.4-15.6-28.7-32-27.5-16.4 1.3-28.7 15.6-27.5 32 1.2 15.5 13.9 27.4 29.4 27.6 8.4 0.2 16.5-3.3 22.2-9.4 0.5-0.5 1-1 0.4-1.6l-2.6-3.1c-0.9-1.1-1.7-0.6-2.4 0.1-5 5.5-12.4 8.3-19.8 7.5-10.3-1-19.9-10.6-21-20.7-1.3-12.9 8.1-24.5 21-25.8s24.5 8.1 25.8 21h-0.1c0.1 0.4 0.1 0.7 0.1 1.1h-4.7c-0.9 0-1.6 0.7-1.6 1.6 0 0.4 0.1 0.7 0.3 1l8 9.7c0.7 0.7 1.8 0.7 2.5 0l8-9.7c0.6-0.6 0.6-1.6 0-2.2-0.3-0.3-0.7-0.5-1.1-0.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(business_hours_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  