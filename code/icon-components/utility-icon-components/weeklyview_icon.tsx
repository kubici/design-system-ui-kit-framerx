
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function weeklyview_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44 7h-5v-2c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v2h-14v-2c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v2h-5c-2.2 0-4 1.8-4 4v2.5c0 0.8 0.7 1.5 1.5 1.5h41c0.8 0 1.5-0.7 1.5-1.5v-2.5c0-2.2-1.8-4-4-4z m2.5 13h-41c-0.8 0-1.5 0.7-1.5 1.5v24.5c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4v-24.5c0-0.8-0.7-1.5-1.5-1.5z m-13.7 9.5l-6.3 13.4c-0.3 0.7-1 1.1-1.8 1.1-1.1 0-1.9-0.9-1.9-1.8 0-0.2 0.1-0.5 0.2-0.8l5.3-11.4h-7.6c-0.9 0-1.7-0.6-1.7-1.5 0-0.8 0.8-1.5 1.7-1.5h10.4c1 0 1.9 0.8 1.9 1.8 0 0.3-0.1 0.5-0.2 0.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(weeklyview_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
