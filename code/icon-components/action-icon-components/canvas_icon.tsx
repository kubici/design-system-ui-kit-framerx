
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function canvas_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45 38.4c-0.2 2.7-0.5 5.6-1 8.4-0.1 0.8-1 1.7-1.8 1.8-5.4 0.6-10.7 1-16.1 1-5.3 0-10.7-0.3-16-1-0.8-0.1-1.7-0.9-1.8-1.8-0.7-4.4-1.1-8.9-1.1-13.4s0.4-9 1.1-13.4c0.1-0.8 1-1.6 1.8-1.8 3.3-0.4 6.5-0.6 9.7-0.8 0 0 2.6-0.1 2.4-2.6-0.2-2.2-4-3.7-4-7.4 0-3 3-5.4 7.9-5.4 4.8 0 7.8 2.4 7.8 5.4 0 3.8-3.7 5.2-3.9 7.4-0.2 2.4 2.4 2.6 2.4 2.6 3.3 0.1 6.6 0.4 9.8 0.8 0.8 0.1 1.7 0.9 1.8 1.8 0.5 3.1 0.8 6 1 9.1 0 0.9-0.7 1.8-1.6 1.8h-0.9c-0.9 0-2.3-0.7-2.9-1.4 0 0-2.1-2.2-4.4-2.3-3.7-0.1-6.5 3.1-6.5 6.6s2.8 6.8 6.4 6.7c2.2-0.1 4.4-2.3 4.4-2.3 0.7-0.6 2-1.2 2.9-1.2h0.9c1.1 0 1.8 0.6 1.7 1.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(canvas_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  