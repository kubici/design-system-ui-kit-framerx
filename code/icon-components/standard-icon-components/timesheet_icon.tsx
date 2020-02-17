
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function timesheet_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m70.9 20h-41.8c-4.3 0-7.8 3.5-7.8 7.8v44.3c0 4.3 3.5 7.8 7.8 7.8h41.7c4.3 0 7.8-3.5 7.8-7.8v-44.3c0.1-4.3-3.4-7.8-7.7-7.8z m-2.6 47c0 1.4-1.2 2.6-2.6 2.6h-31.4c-1.4 0-2.6-1.2-2.6-2.6v-2.6c0-1.4 1.2-2.6 2.6-2.6h31.3c1.4 0 2.6 1.2 2.6 2.6v2.6z m0-15.7c0 1.4-1.2 2.6-2.6 2.6h-31.4c-1.4 0-2.6-1.2-2.6-2.6v-2.6c0-1.4 1.2-2.6 2.6-2.6h31.3c1.4 0 2.6 1.2 2.6 2.6v2.6z m0-15.6c0 1.4-1.2 2.6-2.6 2.6h-31.4c-1.4 0-2.6-1.2-2.6-2.6v-2.7c0-1.4 1.2-2.6 2.6-2.6h31.3c1.4 0 2.6 1.2 2.6 2.6v2.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(timesheet_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
