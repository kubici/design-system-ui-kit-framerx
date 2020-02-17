
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function strategy_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46.9 18.7h-8.1c-1.8 0-3.2 1.4-3.2 3.2v2h-7.5v-15.8c0-0.5-0.5-1-1-1h-10.5v-1.9c0-1.8-1.4-3.2-3.2-3.2h-8.1c-1.7 0-3.2 1.4-3.2 3.2v8.1c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2v-1.9h7.4v12.5h-7.4v-1.9c0-1.8-1.4-3.2-3.2-3.2h-8.1c-1.8 0-3.2 1.4-3.2 3.2v8c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2v-1.9h7.4v12.5h-7.4v-1.8c0-1.8-1.4-3.2-3.2-3.2h-8.1c-1.8 0-3.2 1.4-3.2 3.2v8.1c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2v-1.9h10.6c0.6 0 1-0.6 1-1v-15.8h7.5v1.8c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2v-8.1c-0.1-1.8-1.5-3.2-3.3-3.2z m-34.4-6.3h-6.3v-6.4h6.3v6.4z m0 10.4v6.3h-6.3v-6.3h6.3z m0 23.2h-6.3v-6.3h6.3v6.3z m33.6-23.2v6.3h-6.3v-6.3h6.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(strategy_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
