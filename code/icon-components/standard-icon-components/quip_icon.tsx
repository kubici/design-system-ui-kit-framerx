
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function quip_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.1 20.1c-14.9 0.9-27.1 13.1-28 28-1.1 17.4 12.7 31.9 29.9 31.9h30v-30c0-17.2-14.5-31-31.9-29.9z m-12.3 16.9c0-1.1 0.9-2 2-2h24.5c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2h-24.5c-1.1 0-2-0.9-2-2v-2z m28.5 26c0 1.1-0.9 2-2 2h-24.5c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h24.5c1.1 0 2 0.9 2 2v2z m7.5-12c0 1.1-0.9 2-2 2h-39.6c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h39.6c1.1 0 2 0.9 2 2v2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(quip_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
