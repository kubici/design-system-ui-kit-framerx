
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom22_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m77.7 63.9l-6.2-5c-2.1-1.7-5.1-1.8-7.3-0.2l-5.9 4.3c-0.8 0.6-1.9 0.5-2.6-0.2l-9.7-8.8-8.9-9.8c-0.7-0.7-0.8-1.8-0.2-2.6l4.3-5.9c1.6-2.2 1.5-5.2-0.2-7.3l-5-6.2c-2.2-2.8-6.4-3-8.9-0.5l-5.4 5.4c-1.2 1.2-1.8 2.9-1.8 4.5 0.7 12.7 6.5 24.8 15 33.3s20.5 14.3 33.3 15c1.7 0.1 3.3-0.6 4.5-1.8l5.4-5.4c2.7-2.4 2.4-6.6-0.4-8.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom22_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  