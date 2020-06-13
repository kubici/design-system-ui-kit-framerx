
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function service_report_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m71.8 25h-2a0.9 0.9 0 0 0-1 1v4a8 8 0 0 1-7.9 8h-21.8a8 8 0 0 1-7.9-8v-4a0.9 0.9 0 0 0-1-1h-2a6 6 0 0 0-6 6v43a6 6 0 0 0 6 6h43.6a6 6 0 0 0 6-6v-43a6 6 0 0 0-6-6z m-28.7 41a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z m9.9 0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-19a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z m9.9 0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z m-23.8-34h21.8a2 2 0 0 0 2-2v-4a6 6 0 0 0-5.9-6h-13.9a6 6 0 0 0-6 6v4a2 2 0 0 0 2 2z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(service_report_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  