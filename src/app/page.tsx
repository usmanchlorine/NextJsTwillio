'use client';
import axios from 'axios';
import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Make Call Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Make Call</h2>
            <p className="text-gray-600">Start a new voice or video call.</p>
            <a href='call/make'>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                Make Call
              </button>
            </a>
          </div>

          {/* Send Messages Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Send Messages</h2>
            <p className="text-gray-600">Send a text or multimedia message.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
              Send Message
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
