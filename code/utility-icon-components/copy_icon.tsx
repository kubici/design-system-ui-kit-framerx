
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function copy_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44 2h-26c-2.2 0-4 1.8-4 4v2h24c2.2 0 4 1.8 4 4v28h2c2.2 0 4-1.8 4-4v-30c0-2.2-1.8-4-4-4z m-6 14c0-2.2-1.8-4-4-4h-26c-2.2 0-4 1.8-4 4v30c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4v-30z m-18 7c0 0.6-0.4 1-1 1h-8c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h8c0.6 0 1 0.4 1 1v2z m8 16c0 0.6-0.4 1-1 1h-16c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h16c0.6 0 1 0.4 1 1v2z m4-8c0 0.6-0.4 1-1 1h-20c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h20c0.6 0 1 0.4 1 1v2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(copy_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  