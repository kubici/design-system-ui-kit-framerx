
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function quote_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m35 23h-18c-0.6 0-1 0.4-1 1v3c0 0.6 0.4 1 1 1h18c0.6 0 1-0.4 1-1v-3c0-0.6-0.4-1-1-1z m-2 9h-14c-0.6 0-1 0.4-1 1v3c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-3c0-0.6-0.4-1-1-1z m12.8-19.7l-9.6-9.2c-0.8-0.7-1.8-1.1-2.8-1.1h-14.8c-1 0-2 0.4-2.8 1.1l-9.6 9.2c-0.8 0.8-1.2 1.8-1.2 2.9v30.8c0 2.2 1.8 4 4 4h34c2.2 0 4-1.8 4-4v-30.8c0-1.1-0.4-2.1-1.2-2.9z m-19.8-7.3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z m15 37.5c0 0.8-0.7 1.5-1.5 1.5h-27c-0.8 0-1.5-0.7-1.5-1.5v-25c0-0.8 0.7-1.5 1.5-1.5h27c0.8 0 1.5 0.7 1.5 1.5v25z"/>
	</g>
</svg>
  );
};

addPropertyControls(quote_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
