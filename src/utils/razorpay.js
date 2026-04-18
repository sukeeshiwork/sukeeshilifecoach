const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

export const loadRazorpay = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initiatePayment = async ({ 
  amount,      // in paise (₹565 = 56500)
  name, 
  email, 
  contact,
  description,
  onSuccess,
  onFailure
}) => {
  const loaded = await loadRazorpay();
  
  if (!loaded) {
    alert('Payment gateway failed to load. Please try again.');
    return;
  }

  const options = {
    key: RAZORPAY_KEY,
    amount: amount,
    currency: 'INR',
    name: 'Sukeeshi Coaching',
    description: description,
    image: '/logo.png',
    prefill: {
      name: name,
      email: email,
      contact: contact
    },
    theme: {
      color: '#FAA819'
    },
    handler: function(response) {
      onSuccess(response.razorpay_payment_id);
    },
    modal: {
      ondismiss: function() {
        if (onFailure) onFailure();
      }
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};