
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function package_org_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.4 23h-12.5l-4 4h16.1v6h-36v-6h8.1l-4-4h-4.5c-2 0-3.6 1.6-3.6 3.6v19.4c0 1.7 1.3 3 3 3h38c1.7 0 3-1.3 3-3v-19.4c0-2-1.6-3.6-3.6-3.6z m-23.8 2.8c0.8 0.8 2 0.8 2.8 0l19-19c0.4-0.4 0.4-1 0-1.4l-2.8-2.8c-0.4-0.4-1-0.4-1.4 0l-16.2 16.2-6.7-6.7c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8c-0.4 0.4-0.4 1 0 1.4l9.5 9.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(package_org_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
