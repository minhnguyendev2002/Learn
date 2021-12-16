import * as React from 'react'; 
export default function Option(props) { 
  return (
    <> 
        <li onClick={ props.onClick }>{props.question}</li>
    </>
  );
}
