
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom_apps_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.4 12.2c-0.2-0.6-0.9-0.7-1.4-0.3l-8.1 8.1c-0.6 0.6-1.6 0.6-2.2 0l-5.7-5.7c-0.6-0.6-0.6-1.6 0-2.2l8.2-8.1c0.4-0.4 0.2-1.1-0.3-1.4-1.4-0.4-2.9-0.6-4.3-0.6-8.5 0-15.3 7.3-14.3 16 0.2 1.4 0.5 2.6 1 3.8l-18.7 18.6c-2.2 2.2-2.2 5.8 0 7.9 1.1 1.1 2.6 1.7 4 1.7s2.9-0.6 4-1.7l18.6-18.6c1.2 0.5 2.5 0.8 3.8 1 8.7 1 16-5.8 16-14.3 0-1.5-0.2-2.9-0.6-4.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom_apps_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
