
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function location_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m77.5 28.3l-18-9a3.2 3.2 0 0 0-2.6 0l-16.6 8.4-16.8-8.4a3.1 3.1 0 0 0-3.1 0.1 2.9 2.9 0 0 0-1.4 2.5v45a2.9 2.9 0 0 0 1.6 2.6l18 9a3.2 3.2 0 0 0 2.7 0l16.7-8.3 16.6 8.3a2.5 2.5 0 0 0 1.4 0.4 2.8 2.8 0 0 0 1.6-0.5 2.9 2.9 0 0 0 1.4-2.5v-45a2.8 2.8 0 0 0-1.5-2.6z m-4.7 5.7v23.8a1.9 1.9 0 0 1-2.5 1.9c-4.7-1.8-0.9-9.5-4.3-13.8-3.1-3.9-7.1 0.1-11-6-3.6-5.9 1.3-10.1 5.8-12.4a2.1 2.1 0 0 1 1.7 0l9.3 4.7a2 2 0 0 1 1 1.8z m-25.2 34.8a2.1 2.1 0 0 1-2.2-0.3 6.6 6.6 0 0 1-2.3-4.6c0-3-5-2-5-8 0-4.9-5.7-6.1-10.6-5.6a1.9 1.9 0 0 1-2.1-2v-18.3a1.9 1.9 0 0 1 2.7-1.7l10.8 5.3a0.4 0.4 0 0 1 0.2 0.2l0.4 0.2c4.5 2.6 3.6 4.8 1.7 8-2.1 3.6-3 0-6-1s-6 1-5 3 4 0 6 2 2 5 8 3 7-1 9 1a6.3 6.3 0 0 1 0 9c-1.7 1.8-2.5 5.5-3.2 8a2 2 0 0 1-1 1.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(location_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
