
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function hierarchy_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46.3 46.3h-16.9c-1 0-1.9 0.8-1.9 1.8v14.4h-5.6c-1 0-1.9 0.9-1.9 1.9v13.7c0 1 0.9 1.9 1.9 1.9h18.7c1 0 1.9-0.9 1.9-1.9v-13.7c0-1-0.9-1.9-1.9-1.9h-5.6v-8.7h30v8.7h-5.6c-1 0-1.9 0.9-1.9 1.9v13.7c0 1 0.9 1.9 1.9 1.9h18.8c1 0 1.8-0.9 1.8-1.9v-13.7c0-1-0.8-1.9-1.8-1.9h-5.7v-14.4c0-1-0.9-1.8-1.9-1.8h-16.8v-8.8h5.6c1 0 1.8-0.9 1.8-1.9v-13.7c0-1-0.8-1.9-1.8-1.9h-18.8c-1 0-1.9 0.9-1.9 1.9v13.7c0 1 0.9 1.9 1.9 1.9h5.7v8.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(hierarchy_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  