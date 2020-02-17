
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function comments_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47.8 31c-0.1-0.4-0.1-0.8 0.1-1.2 1.3-2.3 2.1-4.9 2.1-7.7 0-8.8-7.6-16-17-16-4.4 0-8.4 1.6-11.4 4.2 10.3 1.2 18.4 9.6 18.4 19.8 0 2.5-0.5 4.9-1.4 7.1 1.1-0.4 2.2-0.9 3.2-1.4 0.4-0.2 0.8-0.3 1.2-0.1l6.1 2.4c0.6 0.2 1.1-0.3 0.9-0.9l-2.2-6.2z m-28.8-16.9c-9.4 0-17 7.2-17 16 0 2.8 0.8 5.4 2.1 7.7 0.2 0.4 0.3 0.8 0.1 1.2l-2.2 6.1c-0.2 0.6 0.3 1.1 0.9 0.9l6.1-2.4c0.4-0.1 0.8-0.1 1.2 0.1 2.6 1.5 5.6 2.3 8.8 2.3 9.4 0 17-7.2 17-16 0-8.7-7.6-15.9-17-15.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(comments_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
