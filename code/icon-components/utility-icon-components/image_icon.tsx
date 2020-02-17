
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function image_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 10c0-2.2-1.8-4-4-4h-40c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4v-32z m-10.4 28h-29c-1.2 0-1.9-1.3-1.3-2.3l8.8-15.3c0.4-0.7 1.3-0.7 1.7 0l5.3 9.1c0.4 0.6 1.3 0.7 1.7 0.1l4.3-6.2c0.4-0.6 1.3-0.6 1.7 0l7.9 12.6c0.6 0.9 0 2-1.1 2z m-2.6-18c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(image_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  