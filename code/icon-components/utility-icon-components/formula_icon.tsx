
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function formula_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m30.2 3.2c-0.8-0.6-1.9-0.9-3.2-0.9-0.3 0-0.6 0-0.9 0.1-3.5 0.5-5.8 3.8-7.2 6.8-0.6 1.4-1.2 2.9-1.7 4.4-0.3 0.7-0.5 1.4-0.8 2.1 0 0.1-0.4 1.5-0.5 1.5h-3.6c-0.5 0-0.9 0.4-0.9 0.9s0.4 0.9 0.9 0.9h3.1l-1.8 7.5c-1.6 8.2-3.9 17.7-4.5 19.4-0.6 1.7-1.4 2.6-2.5 2.6-0.2 0-0.4 0-0.5-0.1-0.1-0.1-0.2-0.2-0.2-0.4 0-0.1 0.1-0.4 0.3-0.7 0.2-0.3 0.3-0.7 0.3-1 0-0.7-0.2-1.2-0.7-1.6-0.4-0.4-0.9-0.6-1.5-0.6s-1.1 0.2-1.6 0.6c-0.5 0.4-0.7 1-0.7 1.7 0 1 0.4 1.8 1.2 2.5 0.8 0.7 1.8 1 3.1 1 2.1 0 4.1-1 5.5-2.6 0.9-1 1.5-2.2 2.1-3.5 1.8-3.9 2.7-8.2 3.7-12.3 1-4.2 2-8.4 2.9-12.7h3.5c0.5 0 0.9-0.4 0.9-0.9s-0.4-0.9-0.9-0.9h-3.1c1.7-6.6 3.7-11.1 4.1-11.8 0.7-1.1 1.4-1.7 2.1-1.7 0.3 0 0.5 0.1 0.6 0.2 0.1 0.2 0.1 0.3 0.1 0.4 0 0.1-0.1 0.3-0.3 0.7-0.2 0.4-0.3 0.8-0.3 1.2 0 0.6 0.2 1 0.6 1.4 0.4 0.4 0.9 0.6 1.5 0.6s1.1-0.2 1.5-0.6c0.4-0.4 0.6-1 0.6-1.7 0.1-1.1-0.3-1.9-1.2-2.5z m15.9 20c1.3 0 3.8-1 3.8-4.4 0-3.3-2.4-3.5-3.1-3.5-1.5 0-2.9 1.1-4.2 3.3-1.3 2.3-2.7 4.7-2.7 4.7-0.3-1.6-0.6-2.9-0.7-3.5-0.3-1.4-1.9-4.4-5.2-4.4-3.3 0-6.3 1.9-6.3 1.9-0.6 0.4-0.9 1-0.9 1.7 0 1.1 0.9 2 2 2 0.3 0 0.6-0.1 0.9-0.2 0 0 2.5-1.4 3 0 0.2 0.4 0.3 0.9 0.4 1.4 0.6 2.2 1.2 4.7 1.7 7l-2.2 3.1s-2.4-0.9-3.7-0.9-3.8 1-3.8 4.4 2.4 3.5 3.1 3.5c1.5 0 2.9-1.1 4.2-3.3 1.3-2.3 2.7-4.7 2.7-4.7 0.4 2 0.8 3.7 1 4.4 0.8 2.3 2.7 3.7 5.3 3.7 0 0 2.6 0 5.7-1.7 0.7-0.3 1.3-1 1.3-1.9 0-1.1-0.9-2-2-2-0.3 0-0.6 0.1-0.9 0.2 0 0-2.2 1.2-2.9 0.3-0.5-1-1-2.4-1.3-4-0.3-1.5-0.7-3.2-1-4.9l2.2-3.2c-0.1 0.1 2.4 1 3.6 1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(formula_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
