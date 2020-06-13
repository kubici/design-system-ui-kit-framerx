
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function trail_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m27.8 2c3.3 0 5.9 2.6 5.9 5.9s-2.7 5.9-5.9 5.9-5.9-2.6-5.9-5.9 2.6-5.9 5.9-5.9z m15.2 16.1c-1.2-0.1-2.3 0.7-2.4 1.8l-0.6 5.8c-0.2 0-0.3 0.3-0.5 0.3h-5.5l-3.8-6.7c-0.3-0.6-0.9-1.1-1.6-1.2l-5.8-0.8c-1-0.1-2 0.4-2.4 1.4l-4.4 11.3c-0.3 0.9 0.1 1.8 0.9 2.3l10.8 7.4 0.9 8.4c0.1 1.1 1.1 1.9 2.2 1.9 1.3 0 2.3-1 2.2-2.2l-1-10.3c0-0.5-0.3-1-0.8-1.4l-5.9-6.6 2.2-5.4 2.6 4.5c0.4 0.6 1.1 1.3 1.9 1.3h7.6l-2.2 18c-0.1 1.1 0.7 2 1.9 2.1 0.1 0 0.2-0.1 0.2-0.1 1.1 0 2-0.8 2.2-1.9l3.3-27.8c0.1-1-0.8-2-2-2.1z m-30.8 9.6l3.7-9.5c0.2-0.6 0.5-1.2 0.9-1.8l-0.5-0.1c-3.2-0.4-6.2 1.5-7.2 4.4l-2 5.2c-0.4 1.1 0.2 2.4 1.4 2.7l0.9 0.2c1.2 0.5 2.4-0.1 2.8-1.1z m1.4 7.5l-4.5 13.4c-0.2 0.7 0.3 1.3 1 1.3h2.5c0.9 0 1.8-0.6 2.1-1.4l4.4-9.7-5-3.1c-0.1-0.2-0.3-0.4-0.5-0.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(trail_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  