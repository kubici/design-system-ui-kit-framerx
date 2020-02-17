
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom28_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m37.2 2h-22.4c-2.6 0-4.8 2.2-4.8 4.8v38.4c0 2.6 2.2 4.8 4.8 4.8h22.4c2.6 0 4.8-2.2 4.8-4.8v-38.4c0-2.6-2.2-4.8-4.8-4.8z m-11.2 46.4c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4z m11.2-8c0 0.9-0.7 1.6-1.6 1.6h-19.2c-0.9 0-1.6-0.7-1.6-1.6v-30.4c0-0.9 0.7-1.6 1.6-1.6h19.2c0.9 0 1.6 0.7 1.6 1.6v30.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom28_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
