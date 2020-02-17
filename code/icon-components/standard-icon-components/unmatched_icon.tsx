
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function unmatched_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m65.7 46.8c-0.1-0.5-0.5-0.8-1-0.8h-29.4c-0.5 0-0.9 0.3-1 0.8-0.2 1-0.3 2.1-0.3 3.2s0.1 2.2 0.3 3.2c0.1 0.5 0.5 0.8 1 0.8h29.4c0.5 0 0.9-0.3 1-0.8 0.2-1 0.3-2.1 0.3-3.2s-0.1-2.2-0.3-3.2z m-15.7-26.8c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z m0 52c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(unmatched_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
