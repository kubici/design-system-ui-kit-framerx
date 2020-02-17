
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function timesheet_entry_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m70.9 20h-41.8c-4.3 0-7.8 3.5-7.8 7.8v44.3c0 4.3 3.5 7.8 7.8 7.8h41.7c4.3 0 7.8-3.5 7.8-7.8v-44.3c0.1-4.3-3.4-7.8-7.7-7.8z m-2.6 47c0 1.4-1.2 2.6-2.6 2.6h-31.4c-1.4 0-2.6-1.2-2.6-2.6v-2.6c0-1.4 1.2-2.6 2.6-2.6h31.3c1.4 0 2.6 1.2 2.6 2.6v2.6z m-27.4-17l1.4-1.4c0.4-0.4 1-0.4 1.4 0l3.6 3.6 9-9c0.4-0.4 1-0.4 1.4 0l1.4 1.4c0.3 0.4 0.3 1.1 0 1.4l-10.3 10.5c-0.4 0.4-0.9 0.6-1.4 0.6-0.5 0-1-0.2-1.4-0.6l-5-5c-0.5-0.5-0.5-1.1-0.1-1.5z m27.4-14.3c0 1.4-1.2 2.6-2.6 2.6h-31.4c-1.4 0-2.6-1.2-2.6-2.6v-2.7c0-1.4 1.2-2.6 2.6-2.6h31.3c1.4 0 2.6 1.2 2.6 2.6v2.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(timesheet_entry_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
