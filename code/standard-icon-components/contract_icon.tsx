
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function contract_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74.6 33.6l-13.2-13.2c-0.3-0.3-0.6-0.4-1-0.4-0.8 0-1.4 0.6-1.4 1.4v10.6c0 2.2 1.8 4 4 4h10.6c0.8 0 1.4-0.6 1.4-1.4 0-0.4-0.1-0.7-0.4-1z m-1.6 8.4h-14c-3.3 0-6-2.7-6-6v-14c0-1.1-0.9-2-2-2h-20c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6v-30c0-1.1-0.9-2-2-2z m-41-9.4l4.9-0.7c0.1 0 0.3-0.1 0.3-0.2l2.2-4.5c0.2-0.3 0.6-0.3 0.8 0l2.2 4.5c0.1 0.1 0.2 0.2 0.3 0.2l4.9 0.7c0.3 0.1 0.5 0.5 0.2 0.7l-3.6 3.5c-0.1 0.1-0.1 0.2-0.1 0.4l0.8 4.9c0.1 0.3-0.3 0.6-0.6 0.4l-4.4-2.3c-0.1-0.1-0.3-0.1-0.4 0l-4.4 2.3c-0.3 0.2-0.7-0.1-0.6-0.4l0.8-4.9c0-0.1 0-0.3-0.1-0.4l-3.6-3.5c-0.1-0.2 0.1-0.6 0.4-0.7z m31 33.4c0 1.1-0.9 2-2 2h-26c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h26c1.1 0 2 0.9 2 2v2z m4-12c0 1.1-0.9 2-2 2h-30c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h30c1.1 0 2 0.9 2 2v2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(contract_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  