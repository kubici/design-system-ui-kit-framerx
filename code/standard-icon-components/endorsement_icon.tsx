
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function endorsement_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m27.9 42h-5.9c-1.1 0-2 0.9-2 2v32.3c0 1.1 0.9 1.7 2 1.7h2c3.3 0 6-2.7 6-6v-27.9c0-1.2-0.9-2.1-2.1-2.1z m44.1 1h-6c-3.3 0-6-2.7-6-6v-12c0-3.3-2.7-6-6-6h-4c-1.1 0-2 0.9-2 2v8c0 7-3.6 14-10 14-1.1 0-2 0.9-2 2v28c0 1.1 0.8 1.9 1.9 2 8.9 0.5 14.8 3.9 24.1 3.9 10 0 18-3.2 18-12.7v-15.2c0-4.4-3.6-8-8-8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(endorsement_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  