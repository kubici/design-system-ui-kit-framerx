
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function lower_flag_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m6.6 2h-3c-0.8 0-1.5 0.7-1.5 1.5v45c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-45c0-0.8-0.7-1.5-1.5-1.5z m34 22.6c2.7 0 5.2 0.7 7.5 1.9v-19.9c0-0.7-0.8-1.2-1.5-0.8-16 8.4-14.2-8.8-33.5-2.1-0.6 0.2-1 0.8-1 1.4v23.3c0 0.7 0.7 1.2 1.3 0.9 7.7-2.6 11.9-1.3 15.4 0.6 2.9-3.3 7.1-5.3 11.8-5.3z m-8.8 10l6 6-6 6c-0.6 0.6-0.6 1.6 0 2.1l0.7 0.7c0.6 0.6 1.6 0.6 2.1 0l6-6 6 6c0.6 0.6 1.6 0.6 2.1 0l0.7-0.7c0.6-0.6 0.6-1.6 0-2.1l-6-6 6-6c0.6-0.6 0.6-1.6 0-2.1l-0.7-0.7c-0.6-0.6-1.6-0.6-2.1 0l-6 6-6-6c-0.6-0.6-1.6-0.6-2.1 0l-0.7 0.7c-0.6 0.5-0.6 1.5 0 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(lower_flag_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
