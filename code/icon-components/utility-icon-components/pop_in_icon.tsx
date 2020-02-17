
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function pop_in_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m22 31.3h19.1c0.8 0 1.6-0.5 1.6-1.3v-3c0-0.8-0.7-1.7-1.6-1.7h-7.9c-0.9 0-1.4-1-0.7-1.6l17-17c0.6-0.6 0.6-1.5 0-2.1l-2.1-2.1c-0.6-0.6-1.5-0.6-2.1 0l-17 17c-0.6 0.6-1.6 0.2-1.6-0.7v-7.9c0-0.8-0.8-1.7-1.6-1.7h-2.9c-0.8 0-1.5 0.9-1.5 1.7v19c0.1 0.9 0.5 1.3 1.3 1.4z m15 4h-4c-0.6 0-1 0.4-1 1v6.2c0 0.8-0.7 1.5-1.5 1.5h-21c-0.8 0-1.5-0.7-1.5-1.5v-21c0-0.8 0.7-1.5 1.4-1.5h6.3c0.6 0 1-0.4 1-1v-4c0-0.6-0.4-1-1-1h-9.7c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-9.7c0-0.6-0.4-1-1-1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(pop_in_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
