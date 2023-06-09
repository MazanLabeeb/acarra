import { useState } from 'react';
import Button from '../ui/button/button.component';
import './paymentForm.styles.scss';

const PaymentForm = () => {
    const [active, setActive] = useState('cash');

    const ChoosePaymentMethodHandler = (type: string) => {
        setActive(type);
    }

    return <form className='mt-1'>
        <div className="form-group mt-1">
            <label htmlFor="address">
                <h2>Enter your location</h2>
            </label>
            <input type='text' placeholder='Enter address' id='address' />

        </div>

        <div className="form-group mt-1">
            <label htmlFor="note">
                <h2>Note (optional)</h2>
            </label>
            <input type='text' placeholder='Enter text here' id='note' />

        </div>

        <h1>Choose a way to Pay</h1>
        <div className="btn-group">
            <Button onClick={() => ChoosePaymentMethodHandler('cash')} className={active === 'cash' ? 'btn btn-light' : 'btn btn-secondary'} >
                Cash
            </Button>
            <Button onClick={() => ChoosePaymentMethodHandler('card')} className={active === 'card' ? 'btn btn-light' : 'btn btn-secondary'} >
                Credit Card
            </Button>
            <Button onClick={() => ChoosePaymentMethodHandler('bank')} className={active === 'bank' ? 'btn btn-light' : 'btn btn-secondary'} >
                eWallet/Virtual bank
            </Button>
        </div>

        <div className="policy mt-1 mb-7">
            <input type="checkbox" name="policy" id="policy" />
            <label htmlFor="policy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a href="">do eiusmod</a>
            </label>
        </div>
    </form>
}

export default PaymentForm