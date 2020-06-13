
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function dashboard_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z m0 8c12.1 0 22 9.9 22 22 0 1-0.1 2-0.2 3h-8.9c-1 0-1.8 0.7-2 1.7-0.8 5.2-5.4 9.3-10.9 9.3s-10.1-4.1-10.9-9.3c-0.1-1-1-1.7-2-1.7h-8.9c-0.1-1-0.2-2-0.2-3 0-12.1 9.9-22 22-22z m-2.3 29.4c2.4 1.3 5.5 0.3 6.8-2.1 1.9-3.5 5.5-18.9 4.6-19.3-0.9-0.5-11.6 11.1-13.4 14.7-1.4 2.4-0.5 5.4 2 6.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(dashboard_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  