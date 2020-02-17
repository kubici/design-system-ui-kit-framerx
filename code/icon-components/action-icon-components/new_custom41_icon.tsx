
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom41_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45.5 11h-39c-2.5 0-4.5 2-4.5 4.4v21.2c0 2.4 2 4.4 4.5 4.4h39c2.5 0 4.5-2 4.5-4.4v-21.2c0-2.4-2-4.4-4.5-4.4z m-33.7 25.6c0-2.9-2.3-5.1-5.2-5.1v-11c2.9 0 5.2-2.3 5.2-5.1h28.5c0 2.9 2.3 5.1 5.2 5.1v11c-2.9 0-5.2 2.3-5.2 5.1h-28.5z" fill={props.fill}/>
	<ellipse cx="26" cy="25.6" fill={props.fill} rx="7.5" ry="7.3"/>
</svg>
  );
};

addPropertyControls(new_custom41_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
