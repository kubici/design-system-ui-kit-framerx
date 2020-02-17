
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom62_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m77 70h-54c-1.6 0-3 1.3-3 3 0 1.6 1.3 3 3 3h54c1.6 0 3-1.3 3-3s-1.3-3-3-3z m-53-6h34v-4c0-1.1 0.9-2 2-2h10c1.1 0 2 0.9 2 2v4h4c1.1 0 2-0.9 2-2v-34c0-1.1-0.9-2-2-2h-52c-1.1 0-2 0.9-2 2v34c0 1.1 0.9 2 2 2z m9-26c0-1.1 0.9-2 2-2h29c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2h-29c-1.1 0-2-0.9-2-2v-2z m0 12c0-1.1 0.9-2 2-2h19c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2h-19c-1.1 0-2-0.9-2-2v-2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom62_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
