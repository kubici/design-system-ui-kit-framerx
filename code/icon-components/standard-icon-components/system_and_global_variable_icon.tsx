
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function system_and_global_variable_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.8 75.6c0-3.7 1.8-6.5 4.2-8.1v-3.7c-1.3-0.9-2.3-2.2-2.7-3.7-0.5-2.1 0.2-4.5 1.5-6.2 0.3-0.4 0.7-0.8 1.1-1.2 0.4-0.4 0.9-0.7 1.4-0.9 2.6-1.4 5.6-2.4 8.6-2.4 2.7 0 5.1 1.1 6.8 2.7 2.4-2.4 4.9-2.9 6.4-2.9 1.4 0 2.7 0.3 3.9 0.9v-0.2c0-16.5-13.5-30-30-30s-30 13.6-30 30.1c0 16.4 13.4 29.9 29.8 30-0.7-1.3-1-2.7-1-4.4z m25-28.6h-7.9c-0.3-7.1-1.9-13.3-4.3-18 6.6 3.7 11.2 10.3 12.2 18z m-20.8-19.7c3.4 2.9 6.4 10.3 6.9 19.7h-6.9v-19.7z m-26.8 25.7h7.9c0.3 7.1 1.9 13.3 4.3 18-6.6-3.7-11.2-10.3-12.2-18z m7.9-6h-7.9c1-7.7 5.6-14.3 12.2-18-2.4 4.7-3.9 10.9-4.3 18z m12.9 25.7c-3.4-2.9-6.4-10.3-6.9-19.7h6.9v19.7z m0-25.7h-6.9c0.5-9.4 3.5-16.8 6.9-19.7v19.7z m28.5 15.4c1.3 0 3.9-1.1 3.9-4.5s-2.5-3.6-3.2-3.6c-1.5 0-3 1.1-4.3 3.4-1.4 2.3-2.9 4.9-2.9 4.9h-0.1c-0.3-1.6-0.6-3-0.7-3.6-0.3-1.4-1.9-4.5-5.3-4.5s-6.5 2-6.5 2c-0.6 0.4-1 1-1 1.8 0 1.1 0.9 2.1 2.1 2.1 0.3 0 0.6-0.1 0.9-0.2 0 0 2.6-1.4 3.1 0 0.2 0.4 0.3 0.9 0.5 1.4 0.7 2.2 1.3 4.9 1.8 7.3l-2.3 3.1s-2.5-0.9-3.8-0.9-3.9 1.1-3.9 4.5 2.5 3.6 3.2 3.6c1.5 0 3-1.1 4.3-3.4 1.3-2.3 2.8-4.9 2.8-4.9 0.4 2.1 0.8 3.8 1 4.5 0.9 2.4 2.8 3.9 5.4 3.9 0 0 2.7 0 5.8-1.8 0.8-0.3 1.3-1.1 1.3-1.9 0-1.1-0.9-2.1-2.1-2.1-0.3 0-0.6 0.1-0.9 0.2 0 0-2.3 1.3-3 0.3-0.6-1-1-2.4-1.4-4.2-0.3-1.5-0.7-3.3-1.1-5.1l2.3-3.3c0.3 0.1 2.8 1 4.1 1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(system_and_global_variable_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
