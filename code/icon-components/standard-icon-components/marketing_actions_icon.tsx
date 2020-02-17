
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function marketing_actions_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47.5 26c-5.1 0.3-9.2 4.4-9.5 9.5 0.2-5.2 4.3-9.3 9.5-9.5z m10.5 9.5c-0.3-5.1-4.4-9.2-9.5-9.5 5.2 0.2 9.3 4.3 9.5 9.5z m5.6 19.3l-10.2-3.5c-0.8-0.3-1.4-1-1.4-1.9v-13.6c0-2.1-1.7-3.8-3.8-3.8h-0.4c-2.1 0-3.8 1.7-3.8 3.8v26.9c0 2.3-2.9 3.2-4.1 1.2l-2.6-5.5c-1.4-2.4-4.5-3-6.7-1.4l-1.6 1.2 8.6 20.4c0.4 0.9 1.2 1.4 2.2 1.4h22.6c1.1 0 2-0.8 2.3-1.8l4-14.3c0.8-3.9-1.4-7.8-5.1-9.1z m-25.6-8.6v-10.7c0.3-5.1 4.4-9.2 9.5-9.5h1c5.1 0.3 9.2 4.4 9.5 9.5v10.7c0 0.9 1.1 1.3 1.7 0.7 2.7-2.9 4.3-6.7 4.3-10.9 0-9.3-8-16.8-17.5-15.9-7.2 0.7-13.2 6.3-14.3 13.4-0.8 5 0.8 9.9 4.1 13.4 0.6 0.6 1.7 0.2 1.7-0.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(marketing_actions_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
