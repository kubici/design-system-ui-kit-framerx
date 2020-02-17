
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function light_bulb_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" {...props}>
	<path d="m24.1 2.7a16.1 16.1 0 0 0-14.4 14.3 15.9 15.9 0 0 0 5.8 13.6 4.9 4.9 0 0 1 1.9 3.9v0a4 4 0 0 0 4.1 4h9a4 4 0 0 0 4-4v0a4.9 4.9 0 0 1 1.9-3.9 15.9 15.9 0 0 0 5.9-12.2c0.1-9.3-8.3-16.7-18.2-15.7z m8.9 40.5h-14a1.6 1.6 0 0 0-1.6 1.5 4.7 4.7 0 0 0 4.7 4.7h7.8a4.7 4.7 0 0 0 4.7-4.7 1.6 1.6 0 0 0-1.6-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(light_bulb_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
