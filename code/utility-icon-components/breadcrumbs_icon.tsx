
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function breadcrumbs_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m8.4 42c-0.6 0-1-0.4-1-1v-30.1c0-0.6 0.4-1 1-1h8.1c0.4 0 0.9 0.2 1.2 0.5l11.6 14.6c0.4 0.5 0.4 1.3 0 1.9l-11.7 14.6c-0.3 0.4-0.8 0.6-1.3 0.6l-7.9-0.1z m35.9-17l-11.7-14.5c-0.5-0.6-1.4-0.8-2.1-0.2l-2.3 1.9c-0.7 0.5-0.8 1.5-0.2 2.1l9.5 11.7-9.5 11.8c-0.5 0.6-0.4 1.6 0.2 2.1l2.3 1.9c0.7 0.5 1.5 0.4 2.1-0.2l11.7-14.6c0.4-0.8 0.4-1.5 0-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(breadcrumbs_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  