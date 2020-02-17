
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function undo_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m30.3 12.6c10.4 0 18.9 8.4 18.9 18.9s-8.5 18.9-18.9 18.9h-8.2c-0.8 0-1.3-0.6-1.3-1.4v-3.2c0-0.8 0.6-1.5 1.4-1.5h8.1c7.1 0 12.8-5.7 12.8-12.8s-5.7-12.8-12.8-12.8h-13.9s-0.8 0-1.1 0.1c-0.8 0.4-0.6 1 0.1 1.7l4.9 4.9c0.6 0.6 0.5 1.5-0.1 2.1l-2.2 2.2c-0.6 0.6-1.3 0.6-1.9 0.1l-13-13c-0.5-0.5-0.5-1.3 0-1.8l12.9-12.9c0.6-0.6 1.6-0.6 2.1 0l2.1 2.1c0.6 0.6 0.6 1.6 0 2.1l-4.9 4.9c-0.6 0.6-0.6 1.3 0.4 1.3h0.7l13.9 0.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(undo_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
