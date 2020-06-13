
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function snippet_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m14.5 6h-11c-0.8 0-1.5 0.7-1.5 1.5v13c0 0.8 0.7 1.5 1.5 1.5h11c0.8 0 1.5-0.7 1.5-1.5v-13c0-0.8-0.7-1.5-1.5-1.5z m34 0h-27c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h27c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-27 16h17c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-17c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5z m-7 8h-11c-0.8 0-1.5 0.7-1.5 1.5v13c0 0.8 0.7 1.5 1.5 1.5h11c0.8 0 1.5-0.7 1.5-1.5v-13c0-0.8-0.7-1.5-1.5-1.5z m34 0h-27c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h27c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-10 10h-17c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h17c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(snippet_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  