import React from 'react'
import { produce } from 'immer';
import GenerateRows from './GenerateRows';
import selectedNumbers from './SelectedNumbers';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
class NumbersView extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }
    onAddClick = () => {
        const newState = produce(this.state, draftState => {
            draftState.numbers.push(getRandomInt(750))
        });
        this.setState(newState);
    }
    onSelectClick = n => {
        const newState = produce(this.state, draftState => {
            draftState.selectedNumbers.push(n)

        })
        this.setState(newState);
        console.log(n);
        console.log('selected');
    }
    onUnselectClick = n => {
        const selectedNumbers = this.state.selectedNumbers.filter(num => n !== num)
        this.setState({ selectedNumbers });
        console.log('unselected');

    }
    isLocked = n => {
        const { lockedNumbers } = this.state
        return lockedNumbers.some(num => num === n);
    }
    isSelected = n => {
        const { selectedNumbers } = this.state
        return selectedNumbers.some(num => num === n);

    }
    onLockClick = n => {
        const newState = produce(this.state, draftState => {
            draftState.lockedNumbers.push(n);
        })
        this.setState(newState)
    }
    onUnlockClick = n => {
        const lockedNumbers = this.state.lockedNumbers.filter(num => n !== num)
        this.setState({ lockedNumbers });
    }





    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <button className='btn btn-block btn-success' onClick={this.onAddClick}>Add</button>
                </div>

                <div className="row">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <td>Number</td>
                                <td>Add/Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.numbers.map((n, i) => {
                                return <GenerateRows
                                    onSelectClick={() => this.onSelectClick(n)}
                                    onUnselectClick={() => this.onUnselectClick(n)}
                                    isLocked={this.isLocked(n)}
                                    isSelected={this.isSelected(n)}
                                    key={i}
                                    number={n}
                                />

                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        
        )
            {
           /* if (this.state.selectedNumbers.length !== 0) {*/
                return <div className='jumbotron'>
                    <div className='row'>
                        <div className="col-md-6 col-md-offset-3">
                            <h3>Selected Numbers</h3>
                            <ul className='list-group'>
                                

                                {this.state.selectedNumbers.map((n, i) => {
                                    return <selectedNumbers
                                        isLocked={this.isLocked(n)}
                                        onLockClick={() => this.onLockClick(n)}
                                        number={n}
                                        key={i}
                                        onUnlockClick={() => this.onUnlockClick(n)}
                                    />




                                })
                                }
                                </ul>
                            
                        </div>
                    </div>
                </div>
            }
        }
            
        }

    



export default NumbersView