import React, {Component} from 'react';
import Auxilary from '../../hoc/Auxilary';

class BurgerBuilder extends Component {
    state = {
        ingredients: [],
        purchased: false
    }

    render() {
        return(
            <Auxilary>
                <div>Burger View</div>
                <div>Build Controls</div>
            </Auxilary>
        )
    }
}

export default BurgerBuilder;