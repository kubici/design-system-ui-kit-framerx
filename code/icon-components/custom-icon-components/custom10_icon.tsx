
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom10_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m69.8 77.9c-9.4 3.8-24.2 2.8-32.3-6-19.5-21.1-2.4-51.9 21.1-51.9 3.9 0 7.7 0.8 11.2 2.2 1.5 0.6 1.6 2.6 0.4 3.5-7.6 5.4-12.6 14.3-12.6 24.3 0 10.1 4.9 19 12.5 24.4 1.3 0.9 1.1 2.9-0.3 3.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom10_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
