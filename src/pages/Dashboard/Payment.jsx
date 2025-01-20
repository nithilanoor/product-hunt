import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../components/SectionTitle";


const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

    return (
        <div>
            <div className="mb-12">
                <SectionTitle title={'payment'} subtitle={'Secure & Seamless Payments for Premium Features'}></SectionTitle>
            </div>
           <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;