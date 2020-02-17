
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function metrics_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m72 22h-44c-3.3 0-6 2.7-6 6v44c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-44c0-3.3-2.7-6-6-6z m-34 44c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-11c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v11z m10 0c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-26c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v26z m10 0c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-32c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v32z m10 0c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-19c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v19z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(metrics_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  