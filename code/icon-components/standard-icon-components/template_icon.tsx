
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function template_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m73.8 20h-47.6c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2v-47.6c0-3.4-2.8-6.2-6.2-6.2z m-31.5 49.1c0 0.8-0.8 1.4-1.6 1.4h-10.3c-0.8 0-1.4-0.8-1.4-1.6v-20.1c0-0.8 0.8-1.4 1.6-1.4h10.4c0.8 0 1.4 0.8 1.4 1.6v20.1z m28.4 0.2c0 0.8-0.8 1.4-1.6 1.4h-19.2c-0.8 0-1.4-0.8-1.4-1.6v-20.3c0-0.8 0.8-1.4 1.6-1.4h19.3c0.8 0 1.4 0.8 1.4 1.6v20.3z m0.2-29.4c0 0.8-0.8 1.4-1.6 1.4h-38.9c-0.8 0-1.4-0.8-1.4-1.6v-9c0-0.8 0.8-1.4 1.6-1.4h38.9c0.8 0 1.4 0.8 1.4 1.6v9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(template_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
