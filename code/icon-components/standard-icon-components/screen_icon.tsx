
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function screen_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m80 25c0-2.8-2.2-5-5-5h-50c-2.8 0-5 2.2-5 5v34.7c0 2.8 2.2 5 5 5h50c2.8 0 5-2.2 5-5v-34.7z m-7.5 30.3c0 1-0.9 1.9-1.9 1.9h-41.2c-1 0-1.9-0.9-1.9-1.9v-25.9c0-1 0.9-1.9 1.9-1.9h41.2c1 0 1.9 0.9 1.9 1.9v25.9z m-31.3 17.2c-2.8 0-5 2.2-5 5v0.6c0 1 0.9 1.9 1.9 1.9h23.8c1 0 1.9-0.9 1.9-1.9v-0.6c0-2.8-2.2-5-5-5h-17.6z m-1-21.6h-5.6c-0.5 0-1-0.5-1-1v-15.2c0-0.6 0.5-1 1-1h5.6c0.5 0 1 0.4 1 1v15.2c0 0.5-0.5 1-1 1z m25.2 0h-17.1c-0.5 0-1-0.5-1-1v-15.2c0-0.5 0.5-1 1-1h17.1c0.5 0 1 0.5 1 1v15.2c0 0.6-0.5 1-1 1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(screen_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
