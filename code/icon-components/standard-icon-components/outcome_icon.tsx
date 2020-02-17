
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function outcome_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m62.6 31.9c0-0.1-0.1-0.1-0.2-0.2-0.7-0.7-1.9-0.6-2.5 0.2l-2.7 2.6-0.1 0.1c-0.7 0.7-0.7 1.9 0.1 2.5l7 7c0.2 0.2 0.4 0.5 0.4 0.9 0 0.7-0.5 1.3-1.3 1.3h-26.5c-1 0-1.8 0.8-1.9 1.8v3.8c0.1 1 0.9 1.8 1.9 2h26.6c0.3 0 0.5 0.1 0.7 0.3 0.6 0.4 0.7 1.3 0.2 1.8l-7 7-0.1 0.1c-0.7 0.7-0.7 1.9 0.1 2.5l2.6 2.7 0.1 0.1c0.7 0.7 1.9 0.7 2.5-0.1l16.9-16.9 0.1-0.1c0.7-0.7 0.7-1.9-0.1-2.5l-16.8-16.9z m-18.9 7h3.7c1 0 1.9-0.9 1.9-1.9v-12c0-2.8-2.2-5-5-5h-19.3c-2.8 0-5 2.2-5 5v50c0 2.8 2.2 5 5 5h19.3c2.8 0 5-2.2 5-5v-11.8c0-1-0.9-1.9-1.9-1.9h-3.7c-1 0-1.9 0.9-1.9 1.9v7.4c0 1-0.9 1.9-1.9 1.9h-10.5c-1 0-1.9-0.9-1.9-1.9v-41.2c0-1 0.9-1.9 1.9-1.9h10.5c1 0 1.9 0.9 1.9 1.9v7.6c0 1 0.8 1.9 1.9 1.9z" fill={props.fill}/>
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
  
