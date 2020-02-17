
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function multi_select_checkbox_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44 2.5h-25c-2.6 0-4.7 2.1-4.7 4.7v0.8c0 0.5 0.3 0.8 0.8 0.8h22.7c2.6 0 4.7 2.1 4.7 4.7v24.3c0 0.5 0.3 0.8 0.8 0.8h0.7c2.6 0 4.7-2.1 4.7-4.7v-26.7c0-2.6-2.1-4.7-4.7-4.7z m-11 11h-25c-2.6 0-4.7 2.1-4.7 4.7v26.6c0 2.6 2.1 4.7 4.7 4.7h25c2.6 0 4.7-2.1 4.7-4.7v-26.6c0.1-2.6-2.1-4.7-4.7-4.7z m-2 13.3l-12 12c-0.5 0.5-1 0.7-1.6 0.7-0.5 0-1.2-0.2-1.6-0.7l-5.8-5.8c-0.5-0.5-0.5-1.2 0-1.6l1.6-1.6c0.5-0.5 1.2-0.5 1.6 0l4.2 4.2 10.3-10.3c0.5-0.5 1.2-0.5 1.6 0l1.6 1.6c0.5 0.3 0.5 1.1 0.1 1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(multi_select_checkbox_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
