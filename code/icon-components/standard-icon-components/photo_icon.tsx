
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function photo_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m36 31h28c0.8 0 1.3-0.9 0.8-1.5l-3.3-5.1c-1-2-3.1-3.3-5.4-3.3h-12.2c-2.3 0-4.4 1.3-5.4 3.3l-3.3 5.1c-0.5 0.6 0 1.5 0.8 1.5z m14 18c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z m24-12h-48c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-28c0-3.3-2.7-6-6-6z m-24 34c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(photo_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
