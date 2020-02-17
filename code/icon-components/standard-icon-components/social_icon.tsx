
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function social_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m70 57c-4.8 0-8.9 3.4-9.8 8h-13.2c-0.6 0-1 0.5-1 1.1v0.9c0 1-0.1 1.9-0.3 2.8-0.1 0.6 0.4 1.2 1 1.2h14.1c1.5 3.5 5.1 6 9.2 6 5.5 0 10-4.5 10-10s-4.5-10-10-10z m-26.7-11.5c-1.2-0.5-2.3-1.2-3.3-2-0.5-0.4-1.2-0.2-1.5 0.3l-7.1 13.3c-0.4-0.1-0.9-0.1-1.4-0.1-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10c0-2.9-1.2-5.4-3.1-7.3l6.9-12.8c0.2-0.5 0-1.1-0.5-1.4z m6.7-4.5c1 0 1.9-0.1 2.8-0.4l6.9 12.7c0.3 0.5 0.9 0.7 1.4 0.4 1.1-0.7 2.2-1.3 3.4-1.7 0.6-0.2 0.8-0.9 0.5-1.4l-7.2-13.4c1.3-1.7 2.2-3.9 2.2-6.2 0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(social_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
