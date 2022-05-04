import React from "react";
 class selectedNumbers extends React.Component{
     render(){
         const {selectedNumbers, isLocked, onLockClick, onUnlockClick, number} = this.props
         return(
             <li className="list-group-item">
                 {number} <button className="btn btn-primary" onClick={isLocked  ? onUnlockClick : onLockClick}>
                     {isLocked ? 'Unlock' : ':Lock'}
                 </button>

             </li>

         )
     }
 }
 export default selectedNumbers