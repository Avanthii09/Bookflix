import React from 'react';
import { useState } from 'react';
import { ThankYouPage } from './Thankyou';

export default function PaymentPage() {
    // Function to handle showing payment page

    const [showThankyouPage, setShowThankyouPage] = useState(false);
    const handlePayNow = () => {
        setShowThankyouPage(true); // Show the payment page
    };

    if (showThankyouPage) {
        return <ThankYouPage />;
      }
    
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-3xl font-semibold">Payment Details</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input
                                        id="card-number"
                                        name="card-number"
                                        type="text"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Card Number"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        id="expiry-date"
                                        name="expiry-date"
                                        type="text"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Expiry Date"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        id="cvv"
                                        name="cvv"
                                        type="text"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="CVV"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        id="name-on-card"
                                        name="name-on-card"
                                        type="text"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Name on Card"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white rounded px-6 py-1"
                                        onClick={handlePayNow}
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
