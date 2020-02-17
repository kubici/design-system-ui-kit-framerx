
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function decision_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m79.4 28.8l-5.2-3.9c-0.8-0.5-1.5-0.8-2.4-0.8h-17.8v-2.1c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v2h-20c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h45.8c0.9 0 1.8-0.2 2.4-0.8l5.2-3.9c0.8-0.7 0.8-1.9 0-2.5z m-5.4 17.2h-20v-3c0-0.6-0.4-1-1-1h-6c-0.6 0-1 0.4-1 1v3h-17.7c-0.9 0-1.8 0.2-2.4 0.8l-5.2 3.9c-0.9 0.6-0.9 1.9 0 2.6l5.2 3.9c0.8 0.5 1.5 0.8 2.4 0.8h45.7c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2z m-20 25.6v-4.9c0-0.6-0.4-1-1-1h-6c-0.6 0-1 0.4-1 1v4.9c-4 1.1-6.2 3.5-6.9 6.5-0.2 0.9 0.5 1.9 1.5 1.9h18.9c1 0 1.8-0.9 1.5-1.9-0.7-3-3-5.3-7-6.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(decision_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  