
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function case_transcript_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m38 30h4c0.6 0 1-0.4 1-1v-3h14v3c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-3c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v3c0 0.6 0.4 1 1 1z m36 6h-48c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-32c0-3.3-2.7-6-6-6z m-13 31c0 1.7-1.3 3-3 3h-14c-1.7 0-3-1.3-3-3v-19c0-1.7 1.3-3 3-3h7c0.6 0 1 0.4 1 1v6c0 1.1 0.9 2 2 2h6c0.6 0 1 0.4 1 1v12z m0-15.7c0 0.4-0.3 0.7-0.7 0.7h-4.3c-1.1 0-2-0.9-2-2v-4.3c0-0.4 0.3-0.7 0.7-0.7 0.2 0 0.4 0.1 0.5 0.2l5.6 5.6c0.1 0.1 0.2 0.3 0.2 0.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(case_transcript_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  