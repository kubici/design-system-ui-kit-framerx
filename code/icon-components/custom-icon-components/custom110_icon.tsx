
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom110_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m61.7 20.2h-23.4c-1.6 0-3.2 0.6-4.3 1.7-1.2 1.1-1.8 2.7-1.9 4.3v47.5c0.1 3.4 2.8 6.1 6.2 6.1h23.4c3.4 0 6.1-2.7 6.2-6.1v-47.5c-0.1-1.6-0.7-3.2-1.9-4.3-1.1-1.1-2.7-1.7-4.3-1.7z m-16.1 3.5h8.8c0.2 0 0.5 0.2 0.5 0.5 0 0.3-0.3 0.5-0.5 0.5h-8.8c-0.3 0-0.5-0.2-0.5-0.5 0-0.3 0.2-0.5 0.5-0.5z m7.8 51.8c-0.1 0.4-0.4 0.6-0.7 0.5h-5.6c-0.3 0-0.5-0.2-0.5-0.5v-2.5c0-0.2 0.3-0.6 0.5-0.6h5.6c0.4 0 0.7 0.2 0.7 0.6v2.5h0z m10.9-7.3c0 0.1 0 0.3-0.2 0.4-0.1 0.2-0.3 0.2-0.5 0.2h-27.2c-0.2 0-0.4 0-0.5-0.2-0.2-0.1-0.3-0.3-0.3-0.4v-39.5c0-0.2 0.1-0.4 0.2-0.6 0.2-0.1 0.4-0.2 0.6-0.2h27.2c0.4 0 0.7 0.4 0.7 0.8v39.5h0z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom110_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
