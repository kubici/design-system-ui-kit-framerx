
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom11_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m52.2 21.4l8 16.9 17.7 2.7c2 0.3 2.8 2.9 1.3 4.3l-12.8 13.2 3 18.5c0.3 2.1-1.7 3.7-3.5 2.7l-15.9-8.8-15.9 8.8c-1.8 1-3.9-0.6-3.5-2.7l3-18.5-12.9-13.2c-1.4-1.5-0.6-4 1.3-4.3l17.8-2.7 8-16.9c0.9-1.9 3.5-1.9 4.4 0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom11_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
