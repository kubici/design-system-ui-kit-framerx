
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function keyboard_dismiss_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48 34.1c1.1 0 2-0.9 2-2v-26c0-1.1-0.9-2-2-2h-44c-1.1 0-2 0.9-2 2v26c0 1.1 0.9 2 2 2h44z m-42-4v-22h40v22h-40z m7.7-16.7c0 0.8-0.7 1.5-1.5 1.5h-1c-0.8 0-1.5-0.7-1.5-1.5v-1c0-0.8 0.7-1.5 1.5-1.5h1c0.8 0 1.5 0.7 1.5 1.5v1z m5.7-1c0-0.8-0.7-1.5-1.5-1.5h-1c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5h1c0.8 0 1.5-0.7 1.5-1.5v-1z m11.5 1c0 0.8-0.7 1.5-1.5 1.5h-1c-0.8 0-1.5-0.7-1.5-1.5v-1c0-0.8 0.7-1.5 1.5-1.5h1c0.8 0 1.5 0.7 1.5 1.5v1z m-5.8 0c0 0.8-0.7 1.5-1.5 1.5h-1c-0.8 0-1.5-0.7-1.5-1.5v-1c0-0.8 0.7-1.5 1.5-1.5h1c0.8 0 1.5 0.7 1.5 1.5v1z m17.3-1c0-0.8-0.7-1.5-1.5-1.5h-1c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5h1c0.8 0 1.5-0.7 1.5-1.5v-1z m-5.8 0c0-0.8-0.7-1.5-1.5-1.5h-1c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5h1c0.8 0 1.5-0.7 1.5-1.5v-1z m-22.9 7c0 0.8-0.7 1.5-1.5 1.5h-1c-0.8 0-1.5-0.7-1.5-1.5v-1c0-0.8 0.7-1.5 1.5-1.5h1c0.8 0 1.5 0.7 1.5 1.5v1z m5.7-1c0-0.8-0.7-1.5-1.5-1.5h-1c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5h1c0.8 0 1.5-0.7 1.5-1.5v-1z m11.5 1c0 0.8-0.7 1.5-1.5 1.5h-1c-0.8 0-1.5-0.7-1.5-1.5v-1c0-0.8 0.7-1.5 1.5-1.5h1c0.8 0 1.5 0.7 1.5 1.5v1z m-5.8 0c0 0.8-0.7 1.5-1.5 1.5h-1c-0.8 0-1.5-0.7-1.5-1.5v-1c0-0.8 0.7-1.5 1.5-1.5h1c0.8 0 1.5 0.7 1.5 1.5v1z m17.3-1c0-0.8-0.7-1.5-1.5-1.5h-1c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5h1c0.8 0 1.5-0.7 1.5-1.5v-1z m-5.8 0c0-0.8-0.7-1.5-1.5-1.5h-1c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5h1c0.8 0 1.5-0.7 1.5-1.5v-1z m-22.9 7c0 0.8-0.7 1.5-1.5 1.5h-1c-0.8 0-1.5-0.7-1.5-1.5v-1c0-0.8 0.7-1.5 1.5-1.5h1c0.8 0 1.5 0.7 1.5 1.5v1z m22.9-1c0-0.8-0.7-1.5-1.5-1.5h-18.2c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5h18.2c0.8 0 1.5-0.7 1.5-1.5v-1z m5.8 0c0-0.8-0.7-1.5-1.5-1.5h-1c-0.8 0-1.5 0.7-1.5 1.5v1c0 0.8 0.7 1.5 1.5 1.5h1c0.8 0 1.5-0.7 1.5-1.5v-1z m-24.3 12.8h15.8c0.5 0 0.8 0.6 0.4 1l-7.7 9.5c-0.3 0.3-0.9 0.3-1.1 0l-7.8-9.5c-0.3-0.4-0.1-1 0.4-1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(keyboard_dismiss_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
