
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function scan_card_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 30h-48c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-28c0-3.3-2.7-6-6-6z m-49 23c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m47 9c0 1.1-0.9 2-2 2h-38c-1.1 0-2-0.9-2-2v-24c0-1.1 0.9-2 2-2h38c1.1 0 2 0.9 2 2v24z m-8-20h-26c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h26c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(scan_card_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
