import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GqmFuEY4fiYmLgHua2u2HXChCyI2HbRvtAA16Uw7XnumdLHopw0OhxHUIKKqYusKU2Ehvjp1SDtkgkTvUNP7MFL00ORKGCGxG';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
