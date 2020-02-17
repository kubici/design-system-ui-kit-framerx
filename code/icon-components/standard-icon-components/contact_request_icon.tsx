
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function contact_request_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m48.7 50.9c-0.7 0.2-1.1 1.1-0.5 1.7l5.5 5.6c0.6 0.6 0.6 1.5 0 2.1l-2.1 2.1c-0.6 0.6-1.5 0.6-2.1 0l-13.5-13.5c-0.6-0.6-0.6-1.5 0-2.1l13.5-13.5c0.6-0.6 1.5-0.6 2.1 0l2.1 2.2c0.6 0.6 0.6 1.5 0 2.1l-5.6 5.6c-0.6 0.6 0.5 1.7 0.5 1.7 12.8 0.4 22.7 8.8 25.8 20.3 3.3-4.4 5.3-9.8 5.3-15.6-0.1-15.5-13.5-27.7-30.1-27.7-16.7 0-30 12.3-30 27.4 0 4.8 1.4 9.3 3.6 13.3 0.4 0.6 0.5 1.4 0.3 2.1l-3.9 10.7c-0.4 1 0.6 1.9 1.6 1.6l10.8-4.1c0.6-0.3 1.4-0.1 2.1 0.3 4.5 2.5 9.9 4 15.7 4 7.5-0.1 14.3-2.7 19.5-6.9-1.2-10.7-9.9-19-20.6-19.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(contact_request_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
