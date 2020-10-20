import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';

const Payments = (props) => {
    const handleThisToken = useDispatch();
    return(
        <StripeCheckout 
            name="Emaily"
            description="$5 for 5 email credits"
            amount={500}
            token={token => handleThisToken(actions.handleToken(token))}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn">Add Credits</button>
        </StripeCheckout>
    );
}

export default Payments;