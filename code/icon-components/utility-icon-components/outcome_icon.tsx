
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function outcome_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m36.2 11.6l-0.1-0.1c-0.6-0.5-1.5-0.5-2 0.1l-2.2 2.1c-0.6 0.6-0.5 1.5 0 2l5.6 5.6c0.2 0.2 0.3 0.4 0.3 0.7 0 0.6-0.4 1.1-1 1.1h-21.2c-0.8 0-1.5 0.6-1.5 1.4v3c0.1 0.8 0.7 1.5 1.5 1.6h21.3c0.2 0 0.4 0.1 0.5 0.2 0.5 0.4 0.5 1 0.2 1.5l-5.6 5.7c-0.6 0.6-0.5 1.5 0 2l2.1 2.2c0.6 0.6 1.5 0.5 2 0l13.5-13.5c0.6-0.6 0.5-1.5 0-2l-13.4-13.6z m-15.1 5.6h3c0.8 0 1.5-0.7 1.5-1.5v-9.6c0-2.2-1.8-4-4-4h-15.5c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h15.4c2.2 0 4-1.8 4-4v-9.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v5.9c0 0.8-0.7 1.5-1.5 1.5h-8.4c-0.8 0-1.5-0.7-1.5-1.5v-33c0-0.8 0.7-1.5 1.5-1.5h8.4c0.8 0 1.5 0.7 1.5 1.5v6.1c0.1 0.9 0.7 1.6 1.6 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(outcome_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  