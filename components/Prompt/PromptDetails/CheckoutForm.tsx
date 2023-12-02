import { newOrder } from "@/actions/orders/createOrder";
import { getUser } from '@/actions/user/getUser'
import { styles } from '@/utils/styles'
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import {useUser} from '@clerk/nextjs';

const CheckoutForm = ({
  setOpen,
  open,
  promptData
}: {
  setOpen: (open: boolean) => void,
  open: boolean,
  promptData: any
}) => {
  const [message, setMessage] = useState<any>('')
  // const stripe = useStripe()
  // const elements = useElements()
  // const user = useUser()

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
console.log('helloe')
        const user = await getUser()
        if(user?.id){
        await newOrder({
          userId: user?.id,
          promptId: promptData.id,
          payment_id: Math.floor(Math.random()*895634191).toString(),
          payment_method: "visa",
        }).then((res) => {
          setOpen(!open);
          window.location.reload();
        });
        alert('ok')

        }
        // const userData = await getUser();
        // if (!stripe || !elements) {
        //   return;
        // }
        // const { error, paymentIntent } = await stripe.confirmPayment({
        //   elements,
        //   redirect: "if_required",
        // });
        // if (error) {
        //   setMessage(error.message);
        // } else if (paymentIntent && paymentIntent.status === "succeeded") {
          // alert('success');
          
        // }
  }

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <LinkAuthenticationElement id='link-authentication-element' />
      <PaymentElement id='payment-element' />
      <button
        id='submit'
        className={`${styles.button} !bg-[crimson] mt-4 !p-2 !w-full`}
      >
        <span>Pay Now ${promptData?.price}</span>
      </button>
      {/* Show amy error or success message */}
      {message && (
        <div id='payment-message' className='text-[red] font-Poppins pt-2'>
          {message}
        </div>
      )}
    </form>)
}

export default CheckoutForm
