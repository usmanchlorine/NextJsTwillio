'use client';
import Navbar from '@/app/components/Navbar';
import axios from 'axios';
import React, { useCallback, useState } from 'react';

const imageAddress =
  'data:image/jpeg;base64,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';
export default function MakeCall() {
  // const [fromPhoneNumber, setFromPhoneNumber] = useState<number | undefined>();

  const makeCall = async (fromPhoneNumber: string) => {
    const result = await axios.post('/api/call', {
      fromPhoneNumber: fromPhoneNumber,
    });
    console.log(result);
  };

  return (
    <>
      <Navbar />
      <div className="flex  justify-center items-center mt-8 space-x-4">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-72">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={imageAddress}
            alt="Usman's Avatar"
          />
          <h2 className="text-lg font-semibold">Usman</h2>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => makeCall('+923202195005')}
          >
            Make Call
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-72">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={imageAddress}
            alt="Adam's Avatar"
          />
          <h2 className="text-lg font-semibold">Adam</h2>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => makeCall('+18452348191')}
          >
            Make Call
          </button>
        </div>
      </div>
    </>
  );
}
