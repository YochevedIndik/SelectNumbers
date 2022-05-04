import React from "react";
class GenerateRows extends React.Component{




    render(){
        
const{number, isSelected, isLocked, onUnselectClick, onSelectClick} = this.props

        return( <tr>
            <td>{number}</td>
            <td>
                <button disabled={isLocked} className={`btn btn-${isSelected ? 'danger' : 'success'}`}
                    onClick={isSelected ? onUnselectClick : onSelectClick}>
                    {isSelected ? 'Unselect' : 'Select'}
                    </button>
                </td>
        </tr>
            )
    }
}
export default GenerateRows
