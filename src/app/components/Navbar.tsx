import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">TwillioCallApp</h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/call/make"
              className="text-white"
            >
              Make Call
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white"
            >
              Send Messages
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
