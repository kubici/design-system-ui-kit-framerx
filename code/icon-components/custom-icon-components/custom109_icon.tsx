
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom109_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m79.7 46.4l-1.4-2.1-4.1 1.8c-5.3-8.5-14.9-14.7-24.9-14.7-14.9 0-29 13.8-29 28.3v0.9l0.1 1.2h7.1l-0.1-1.2c0-0.3 0-0.6 0-0.9 0-11.7 9.9-21.3 21.9-21.3 7.7 0 14.8 3.9 18.8 10.4l-13.9 6c-2.5-2-6-2.4-8.9-0.9-1.9 0.9-3.3 2.5-3.9 4.5-0.7 2-0.5 4.2 0.5 6 2.1 3.8 6.9 5.3 10.8 3.3 2.9-1.5 4.6-4.5 4.2-7.7l12.9-7.7c1 2.4 1.4 4.9 1.4 7.4v0.9l0 1.2h7.1l0-1.2c0-0.3 0-0.6 0-0.9 0-3.8-0.9-7.5-2.6-10.9l4-2.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom109_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
