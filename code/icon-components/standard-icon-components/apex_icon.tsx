
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function apex_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m78 67.5h-33.6c-1 0-1.9 0.9-1.9 1.9v3.7c0 1 0.9 1.9 1.9 1.9h33.6c1 0 1.9-0.9 1.9-1.9v-3.7c0-1.1-0.9-1.9-1.9-1.9z m-28.8-22.7l-24.1-19.4c-0.7-0.6-1.9-0.5-2.5 0.4l-2.1 3c-0.6 0.9-0.4 2 0.4 2.6l17.1 13.7c0.6 0.5 0.6 1.5 0 2l-17.2 13.8c-0.7 0.6-1 1.9-0.4 2.6l2.1 3.2c0.6 0.9 1.7 1 2.5 0.4l24.2-19.3c1-0.8 1-2.3 0-3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(apex_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  