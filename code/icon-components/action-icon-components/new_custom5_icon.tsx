
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom5_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m49.1 5.8c-8.2-3.1-17.7-3.8-26.1-1.1-7.4 2.4-15 7.9-16.1 16.1-0.2 1.7-0.2 3.6 0.2 5.2 0.2 0.9 0.5 1.7 0.8 2.6 0.2 0.5 0.3 0.9 0.6 1.3-0.3 0.5-0.6 1-1 1.4-2.3 3.6-3.9 7.7-4.9 11.8-0.4 1.7-1.4 4.3 0.5 5.5 0.7 0.5 1.8 0.5 2.5 0.1 1-0.6 1.1-1.5 1.3-2.5 0.7-4.2 2.2-8.4 4.5-12 1.1-1.7 2.3-3.5 3.7-5.1 1.2-1.3 3-3.7 5-3 2 0.7 1.9 3 0.6 4.2s-2.5 2.5-2.5 4.4c0 1.4 0.6 2.9 1.8 3.8 1.6 1.3 4.8 1.6 6.7 1.4 4.2-0.2 7.7-1.5 11.1-4 4.5-3.1 6.2-8.5 7.1-13.6 0.6-3.2 1-6.3 2.1-9.3 0.5-1.3 1.1-2.5 1.8-3.6 0.3-0.6 1-1.2 1.1-1.8 0.3-0.9-0.2-1.6-0.8-1.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom5_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
