
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function topic2_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.2 13.3h-6.5l2.8-10.7v-0.2c0-0.4-0.3-0.8-0.8-0.8h-5.2c-0.4 0-0.7 0.3-0.8 0.7l-2.8 11.1h-13l2.8-10.7v-0.3c0-0.4-0.3-0.8-0.8-0.8h-5.2c-0.4 0-0.7 0.3-0.8 0.7l-2.9 11h-7.2c-0.4 0-0.7 0.2-0.8 0.6l-1.3 4.9v0.2c0 0.4 0.3 0.8 0.8 0.8h6.8l-3.2 12.5h-7c-0.4 0-0.7 0.2-0.8 0.6l-1.3 4.7v0.2c0 0.4 0.3 0.8 0.8 0.8h6.6l-2.8 10.9v0.2c0 0.4 0.3 0.8 0.8 0.8h5.2c0.4 0 0.7-0.2 0.8-0.7l2.9-11.2h12.9l-2.8 10.8v0.2c0 0.4 0.3 0.8 0.8 0.8h5.2c0.4 0 0.7-0.2 0.8-0.7l2.8-11.2h7.1c0.4 0 0.7-0.2 0.8-0.7l1.3-4.9v-0.2c0-0.4-0.3-0.8-0.8-0.8h-6.7l3.3-12.5h6.9c0.4 0 0.7-0.2 0.8-0.7l1.3-4.9v-0.2s-0.4-0.3-0.8-0.3z m-18.3 19h-12.9l3.2-12.5h12.9l-3.2 12.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(topic2_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
