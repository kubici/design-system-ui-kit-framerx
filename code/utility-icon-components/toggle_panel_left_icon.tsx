
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function toggle_panel_left_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46 8h-40c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2v-32c0-1.1-0.9-2-2-2z m-2 32h-36v-28h36v28z m-23-2h-9.9c-0.6 0-1-0.4-1-1v-22c0-0.6 0.4-1 1-1h9.9c0.6 0 1 0.4 1 1v22c0 0.6-0.4 1-1 1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(toggle_panel_left_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  