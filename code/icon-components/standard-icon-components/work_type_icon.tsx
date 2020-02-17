
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function work_type_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m75.9 29.3l-9-8.9a1.1 1.1 0 0 0-0.9-0.4 1.4 1.4 0 0 0-1.4 1.4v6.4a3.9 3.9 0 0 0 3.9 3.8h6.4a1.4 1.4 0 0 0 1.3-1.3 1.7 1.7 0 0 0-0.3-1z m-46.3 33.3v-31a5.8 5.8 0 0 0-5.8 5.8v36.7a5.9 5.9 0 0 0 5.8 5.9h29.2a5.8 5.8 0 0 0 5.8-5.7h-23.3c-6.4 0-11.7 0-11.7-11.7z m44.7-25.2h-9.8a5.8 5.8 0 0 1-5.9-5.8v-9.7a1.8 1.8 0 0 0-1.8-1.9h-15.5a5.8 5.8 0 0 0-5.9 5.8v36.7a5.8 5.8 0 0 0 5.9 5.8h29.1a5.8 5.8 0 0 0 5.9-5.8v-23.1a2 2 0 0 0-2-2z m-24.4 24.8a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.4-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5z m0-13.7a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.4-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5z m13.7 13.7a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5z m0-13.7a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(work_type_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  