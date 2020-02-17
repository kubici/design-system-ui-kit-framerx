
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function category_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m61.8 29.4l8.9 8.9c2 1.9 2 5.1 0 7l-23.2 23.1v-31.8l7.2-7.3c1.9-1.9 5.2-1.9 7.1 0.1z m-24.3-9.4h-12.5c-2.8 0-5 2.2-5 5v43.8c0 6.2 5 11.2 11.2 11.2s11.2-5 11.2-11.2v-43.8c0.1-2.8-2.2-5-4.9-5z m-6.3 53.8c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z m43.8-16.3h-8.8l-6 6h13.8l-0.1 10.5h-24.1l-6 6h31.2c2.8 0 5-2.2 5-5v-12.5c0-2.7-2.2-5-5-5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(category_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
