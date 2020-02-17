
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function entitlement_process_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m56 79.6v-16.5l9.4-10.4h13.3v20c-0.1 3.8-3.1 6.8-6.9 6.9h-15.8z m-6 0h-14.8c-3.7 0-6.9-2.3-6.9-6.9h-2.3c-2.5 0-4.6-2-4.6-4.5v-0.1c0-2.5 2.1-4.6 4.6-4.6h2.3v-9.3h-2.3c-2.5 0-4.6-2.1-4.6-4.6 0-2.5 2.1-4.6 4.6-4.6h2.3v-9.3h-2.3c-2.5 0-4.6-2-4.6-4.5v-0.1c0-2.5 2-4.6 4.5-4.7h2.4c0.2-3.7 3.2-6.7 6.9-6.9h36.6c3.8 0.1 6.8 3.1 6.9 6.9v20.2h-13.7l-10.7-11.8c-0.8-0.8-2.2-0.8-3 0l-12.3 13.5c-0.7 0.8-0.7 2 0 2.8l10.8 11.9s0.1 16.6 0.2 16.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(entitlement_process_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
