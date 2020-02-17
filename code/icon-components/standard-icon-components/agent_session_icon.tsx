
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function agent_session_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.2 21.7c-16.6 0-30 12.5-30 28 0 5 1.4 9.6 3.8 13.7 0.3 0.5 0.4 1.1 0.2 1.6l-2.8 8.9c-0.5 1.6 1 3 2.6 2.5l8.8-3.1c0.6-0.2 1.2-0.1 1.7 0.2 4.6 2.7 10 4.2 15.8 4.2 16.6 0 30-12.5 30-28-0.2-15.5-13.6-28-30.1-28z m-8.2 40.4c0 0.6-0.5 1.1-1.1 1.1h-5.3c-0.6 0-1.1-0.5-1.1-1.1v-6.8c0-0.6 0.5-1.1 1.1-1.1h5.3c0.6 0 1.1 0.5 1.1 1.1v6.8z m12 0c0 0.6-0.5 1.1-1.1 1.1h-5.3c-0.6 0-1.1-0.5-1.1-1.1v-15.8c0-0.6 0.5-1.1 1.1-1.1h5.3c0.6 0 1.1 0.5 1.1 1.1v15.8z m12 0c0 0.6-0.5 1.1-1.1 1.1h-5.3c-0.6 0-1.1-0.5-1.1-1.1v-24.8c0-0.6 0.5-1.1 1.1-1.1h5.3c0.6 0 1.1 0.5 1.1 1.1v24.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(agent_session_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
