
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function number_input_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 80h-48c-3.3 0-6-2.7-6-6v-48c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6v48c0 3.3-2.7 6-6 6z m-45.9-50v40c0 1.1 0.9 2 2 2h39.9c1.1 0 2-0.9 2-2v-40c0-1.1-0.9-2-2-2h-39.9c-1.1 0-2 0.9-2 2z m34.9 12.8h-3.7l1.6-6.1v-0.1c0-0.2-0.2-0.5-0.5-0.5h-2.9c-0.2 0-0.4 0.2-0.5 0.4l-1.6 6.3h-7.4l1.6-6.1v-0.1c0-0.2-0.2-0.5-0.5-0.5h-2.9c-0.2 0-0.4 0.2-0.5 0.4l-1.6 6.3h-4.1c-0.2 0-0.4 0.1-0.5 0.3l-0.7 2.8v0.1c0 0.2 0.2 0.5 0.5 0.5h3.9l-1.8 7.1h-4c-0.2 0-0.4 0.1-0.5 0.3l-0.7 2.8v0.1c0 0.2 0.2 0.5 0.5 0.5h3.7l-1.6 6.2v0.1c0 0.2 0.2 0.5 0.5 0.5h2.9c0.2 0 0.4-0.1 0.5-0.4l1.6-6.4h7.3l-1.6 6v0.1c0 0.2 0.2 0.5 0.5 0.5h2.9c0.2 0 0.4-0.1 0.5-0.4l1.6-6.4h4.1c0.2 0 0.4-0.1 0.5-0.4l0.7-2.8v-0.1c0-0.2-0.2-0.5-0.5-0.5h-3.8l1.8-7.1h3.9c0.2 0 0.4-0.1 0.5-0.4l0.7-2.8c0.1-0.1-0.1-0.2-0.4-0.2z m-10.3 10.8h-7.4l1.8-7.1h7.3l-1.7 7.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(number_input_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  