
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function search_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m49.6 45.3l-13.4-13.3c2.7-3.8 4.1-8.6 3.4-13.7-1.2-8.6-8.2-15.4-16.9-16.2-11.8-1.2-21.8 8.8-20.6 20.7 0.8 8.6 7.6 15.7 16.2 16.9 5.1 0.7 9.9-0.7 13.7-3.4l13.3 13.3c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.6 0.1-2.2z m-41.6-24.4c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.7-12.9-12.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(search_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
