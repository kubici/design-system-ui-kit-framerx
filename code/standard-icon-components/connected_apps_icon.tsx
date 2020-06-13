
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function connected_apps_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73 21h-46c-3.3 0-6 2.7-6 6v46c0 3.3 2.7 6 6 6h46c3.3 0 6-2.7 6-6v-46c0-3.3-2.7-6-6-6z m-2 52h-42c-1.1 0-2-0.9-2-2v-42c0-1.1 0.9-2 2-2h42c1.1 0 2 0.9 2 2v42c0 1.1-0.9 2-2 2z m-12.5-26h-6.5l5.7-9.4c0.6-1-0.1-2.6-1.3-2.6h-8.3c-1.2 0-2.3 0.8-2.8 1.9l-5.2 13.8c-0.4 1 0.3 2.3 1.4 2.3h6.6l-3.2 10.9c-0.3 1 1 1.6 1.7 0.8l13.1-15.4c0.8-1 0.1-2.3-1.2-2.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(connected_apps_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  