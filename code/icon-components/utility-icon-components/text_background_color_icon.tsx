
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function text_background_color_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m25.9 16l4.3 10h-9l3.9-10h0.8z m22.1-8v36c0 2.2-1.8 4-4 4h-36c-2.2 0-4-1.8-4-4v-36c0-2.2 1.8-4 4-4h36c2.2 0 4 1.8 4 4z m-5.5 32.7l-12-29.7c-0.3-0.6-0.8-1-1.5-1h-7.1c-0.6 0-1.2 0.4-1.4 1l-11 29.7c-0.2 0.6 0.2 1.3 0.9 1.3h4.1c0.6 0 1.2-0.5 1.4-1.1l3.2-8.9h13.4l3.5 8.9c0.2 0.6 0.8 1.1 1.4 1.1h4.1c0.7 0 1.2-0.7 1-1.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(text_background_color_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  