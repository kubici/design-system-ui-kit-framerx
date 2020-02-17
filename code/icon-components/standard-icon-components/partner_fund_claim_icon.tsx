
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function partner_fund_claim_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m56.5 34h9.4c0.7 0 1.3-0.6 1.3-1.3 0-0.3-0.1-0.6-0.3-0.9l-11.8-11.5c-0.3-0.2-0.6-0.3-0.9-0.3-0.7 0-1.3 0.6-1.3 1.3v9.2c0.1 1.9 1.7 3.5 3.6 3.5z m-17.9 31c0-3.5 2-6.6 5.2-7.8 2.6-1 5.2-1.6 8-1.6 4 0 7.4 1.1 10.5 2 1.7 0.5 3.3 1 4.8 1.3l0.2-18c0-0.9-0.8-1.7-1.7-1.7h-12.6c-3 0-5.2-2.4-5.2-5.2v-12.3c0-0.9-0.8-1.7-1.8-1.7h-17.8c-2.9 0-5.2 2.4-5.2 5.2v42c0 2.9 2.4 5.2 5.2 5.2h10.4v-7.4z m33.8-0.1c-9.1 2.8-16.3-5.8-26.2-1.7-0.8 0.3-1.2 1-1.2 1.8v10.4c0 1.4 1.2 2.2 2.4 1.8 9.9-3 17 5.6 26.3 1.7 0.7-0.3 1.3-1 1.3-1.8v-10.3c0-1.3-1.3-2.2-2.6-1.9z m-12.1 9.7c-2.1 0-3.9-1.7-3.9-3.9 0-2.1 1.7-3.9 3.9-3.9s3.9 1.7 3.9 3.9-1.7 3.9-3.9 3.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(partner_fund_claim_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
