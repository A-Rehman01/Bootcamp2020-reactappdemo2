import  React from  'react';


// function Customtag  () {
//     return (
//       <div >
//         <h1>Hello  world</h1>
//       </div>
//     );
//   }

function Customtag(props){
    return(
        <div>
        <h1> We learn in class:3 {props.sent} </h1>
        </div>
        );
}
export  default Customtag;