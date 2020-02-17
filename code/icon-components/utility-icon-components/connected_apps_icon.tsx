
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function connected_apps_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m23.8 31.2l-3.8 17.6c-0.2 1 1.1 1.7 1.7 0.9l21-26c0.6-0.7 0.1-1.7-0.7-1.7h-11.2c-0.8 0-1.3-0.9-0.9-1.5l9.9-16.2c0.6-1-0.1-2.3-1.3-2.3h-17.7c-1.1 0-2 0.7-2.4 1.7l-8.3 24.3c-0.3 1 0.4 2 1.4 2h11.4c0.6 0 1.1 0.6 0.9 1.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(connected_apps_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
