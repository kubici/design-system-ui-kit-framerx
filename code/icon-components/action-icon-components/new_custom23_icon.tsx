
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom23_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m25 30.6c0.6 0.6 1.5 0.6 2.2 0l22.6-20.6c0.4-0.8 0.3-2-1.3-2h-44.8c-1.2 0-2.2 1.2-1.3 2.1l22.6 20.5z m25-11.8c0-1-1.3-1.6-2-0.9l-17.6 16.1c-1.2 1.1-2.7 1.7-4.3 1.7-1.6 0-3.1-0.6-4.3-1.7l-17.7-16c-0.8-0.7-2-0.2-2 0.9v20.4c0 2.6 2.2 4.7 4.8 4.7h38.4c2.6 0 4.8-2.1 4.8-4.7-0.1 0-0.1-14.2-0.1-20.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom23_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  