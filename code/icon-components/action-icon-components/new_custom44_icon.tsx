
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom44_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m40.7 9.1c-4.1-5.3-7.5-7.1-14.7-7.1-3.2 0-7.1 1.3-8.7 1.6 0-0.9-0.7-1.6-1.6-1.6h-3.2c-0.9 0-1.6 0.7-1.6 1.6v6.4c0 0.9 0.7 1.6 1.6 1.6h3.1c0.9 0 1.6-0.7 1.6-1.6h1.8c1.3 0 2.3 1 2.3 2.3v0.1c0 1.4 1 2.4 2.4 2.4v12.8c-1.7 0-3.1 1.4-3.1 3.2v14.4c0 2.6 2.1 4.8 4.7 4.8h1.6c2.6 0 4.7-2.2 4.7-4.8v-14.4c0-1.8-1.4-3.2-3.1-3.2v-12.8c1.3 0 2.4-1.8 2.4-3.1v-0.1c0-1.2 0.9-2.2 2.1-2.2 3.1-0.2 4.9 1.1 5.7 1.8 0.5 0.4 1.3 0.5 1.7 0.1 0.7-0.5 0.9-1.5 0.3-2.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom44_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  