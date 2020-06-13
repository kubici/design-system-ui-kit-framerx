
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function dock_panel_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m1.9 35v-26c0-3.9 3.1-7 7-7h26c3.9 0 7 3.1 7 7v3h-6v-3c0-0.6-0.4-1-1-1h-26c-0.6 0-1 0.4-1 1v26c0 0.6 0.4 1 1 1h3v6h-3c-3.9 0-7-3.1-7-7z m44-19h-26c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4v-26c0-2.2-1.8-4-4-4z m-4 25.2c0 0.5-0.3 0.8-0.9 0.8h-11.6c-0.5 0-1-0.5-1-0.9v-1.8c0-0.5 0.5-1 1-1h4.8c0.6 0 0.8-0.6 0.5-1l-10.4-10.4c-0.4-0.3-0.4-0.9 0-1.3l1.3-1.2c0.3-0.4 0.9-0.4 1.2 0l10.4 10.4c0.4 0.4 1 0.1 1-0.5v-4.8c0-0.6 0.6-1 1.1-1h1.8c0.5 0 0.8 0.5 0.8 1v11.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(dock_panel_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  