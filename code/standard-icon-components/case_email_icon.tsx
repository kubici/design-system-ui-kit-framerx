
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function case_email_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m38 30h4c0.6 0 1-0.4 1-1v-3h14v3c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-3c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v3c0 0.6 0.4 1 1 1z m36 6h-48c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-32c0-3.3-2.7-6-6-6z m-36.1 11.1h24.3c0.8 0 0.9 0.7 0.7 1.1l-12.3 11.4c-0.3 0.3-0.8 0.3-1.2 0l-12.2-11.3c-0.5-0.6 0-1.2 0.7-1.2z m25.1 16.9c0 1.4-1.6 3-3 3h-20c-1.4 0-3-1.6-3-3v-10.9c0-0.6 0.7-0.9 1.1-0.5l9.6 8.9c0.6 0.6 1.5 0.9 2.3 0.9s1.7-0.3 2.3-0.9l9.5-8.9c0.4-0.4 1.1-0.2 1.1 0.3 0.1 0.9 0.1 10.8 0.1 11.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(case_email_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  