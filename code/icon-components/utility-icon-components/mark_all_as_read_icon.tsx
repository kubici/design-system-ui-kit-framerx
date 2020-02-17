
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function mark_all_as_read_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m24 7l-1.7-1.7c-0.5-0.5-1.2-0.5-1.7 0l-10.6 10.5-4.3-4.2c-0.5-0.5-1.2-0.5-1.7 0l-1.7 1.7c-0.5 0.5-0.5 1.2 0 1.7l5.9 5.9c0.5 0.5 1.1 0.7 1.7 0.7 0.6 0 1.2-0.2 1.7-0.7l12.4-12.2c0.4-0.4 0.4-1.2 0-1.7z m24.4 11.4h-20.9c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6h20.9c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6z m0 14.3h-38.6c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6h38.6c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6z m0 14.3h-38.6c-0.9 0-1.6-0.7-1.6-1.6v-3.2c0-0.9 0.7-1.6 1.6-1.6h38.6c0.9 0 1.6 0.7 1.6 1.6v3.2c0 0.9-0.7 1.6-1.6 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(mark_all_as_read_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
