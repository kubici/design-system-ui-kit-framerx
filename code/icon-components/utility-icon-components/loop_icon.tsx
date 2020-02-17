
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function loop_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47.2 32.6c0 0.1 0 0.1-0.1 0.2-0.3 0.9-0.5 1.8-0.9 2.6-0.4 0.9-0.8 1.9-1.3 2.7-1 1.8-2.2 3.4-3.6 4.8s-3 2.7-4.7 3.7c-1.7 1-3.6 1.9-5.6 2.4-2 0.6-4.1 0.8-6.2 0.8-12.5 0.2-22.8-10.1-22.8-22.7s10.3-22.9 22.9-22.9c4.3 0 8.3 1.2 11.7 3.2 1.7 1 3.2 2.2 4.5 3.5 0.4 0.3 0.7 0.6 1 1 0.8 0.6 1.3 0.2 1.3-0.8v-7.5c0-0.8 0.8-1.6 1.6-1.6h3.2c0.9 0 1.6 0.8 1.7 1.6v19.6c0 0.8-0.6 1.4-1.4 1.4h-19.6c-0.9 0-1.5-0.6-1.5-1.5v-3.3c0-0.9 0.8-1.6 1.6-1.6h7.5c0.6 0 1.2-0.2 1.4-0.5-2.9-4-7.6-6.6-13-6.6-8.9 0-16 7.2-16 16s7.2 16 16 16c7 0 12.9-4.4 15.1-10.6 0 0 0.3-1.4 1.4-1.4h4.6c0.7 0 1.3 0.5 1.3 1.2-0.1 0.1-0.1 0.2-0.1 0.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(loop_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
