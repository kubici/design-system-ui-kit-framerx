
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function rules_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50.1 25.4l-8.1-8.1c-0.4-0.4-1.1-0.4-1.5 0l-1.5 1.5c-0.4 0.4-0.4 1.1 0 1.5l2.5 2.5c0.4 0.4 0.1 1.2-0.5 1.2h-22.1l13.2-13.1c0.4-0.4 1.2-0.1 1.2 0.5v3.6c0 0.6 0.4 1 1 1h2.1c0.6 0 1-0.4 1-1v-11.6c0-0.6-0.4-1-1-1h-11.4c-0.5 0-1 0.5-1 1.1v2c0 0.6 0.4 1 1 1h3.6c0.6 0 0.9 0.7 0.5 1.2l-16.2 16.2h-9.9c-0.6 0-1 0.5-1 1.1v2.1c0 0.6 0.6 1.1 1.1 1.1h10l16.1 16.1c0.4 0.4 0.1 1.2-0.5 1.2h-3.6c-0.6 0-1 0.4-1 1v2c0 0.5 0.4 1 1 1.1h11.4c0.6 0 1-0.4 1-1v-11.5c0-0.6-0.4-1-1-1h-2.1c-0.6 0-1 0.4-1 1v3.6c0 0.6-0.7 0.9-1.2 0.5l-13.2-13h22.1c0.6 0 0.9 0.8 0.5 1.2l-2.6 2.5c-0.4 0.4-0.4 1.1 0 1.5l1.5 1.5c0.4 0.4 1.1 0.4 1.5 0l8.1-8c0.4-0.5 0.4-1.1 0-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(rules_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
