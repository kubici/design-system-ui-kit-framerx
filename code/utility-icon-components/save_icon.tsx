
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function save_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m37.1 4v13.6c0 1-0.8 1.9-1.9 1.9h-21.3c-1 0-1.9-0.8-1.9-1.9v-13.6h-4c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4v-32.8l-7.2-7.2h-3.7z m7 38.1c0 1-0.8 1.9-1.9 1.9h-32.3c-1 0-1.9-0.8-1.9-1.9v-16.7c0-1 0.8-1.9 1.9-1.9h32.3c1 0 1.9 0.8 1.9 1.9v16.7z m-19.3-28.5c0 1 0.8 1.9 1.9 1.9h4.6c1 0 1.9-0.8 1.9-1.9v-9.6h-8.3l-0.1 9.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(save_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  