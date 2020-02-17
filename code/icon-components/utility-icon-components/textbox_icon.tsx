
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function textbox_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.7 49.4h-37.4c-2.6 0-4.7-2.1-4.7-4.7v-37.4c0-2.6 2.1-4.7 4.7-4.7h37.5c2.6 0 4.7 2.1 4.7 4.7v37.5c-0.1 2.5-2.2 4.6-4.8 4.6z m-35.8-39v31.2c0 0.9 0.7 1.6 1.6 1.6h31.2c0.9 0 1.6-0.7 1.6-1.6v-31.2c0-0.9-0.7-1.6-1.6-1.6h-31.2c-0.9 0-1.6 0.7-1.6 1.6z m6.3 24.9v-18.6c0-0.9 0.7-1.6 1.6-1.6h3.1c0.9 0 1.6 0.7 1.6 1.6v18.6c0 0.9-0.7 1.6-1.6 1.6h-3.1c-0.9 0-1.6-0.7-1.6-1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(textbox_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
