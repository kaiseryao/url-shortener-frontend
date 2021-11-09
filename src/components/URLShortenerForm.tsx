import axios from 'axios';
import { useState } from 'react';
import { Icon } from "@iconify/react";

function URLShortenerForm() {
  return (
    <div className="flex items-center justify-center min-h-screen px-5 py-5 bg-gray-800 min-w-screen">
      <div
        className="relative w-full max-w-3xl p-10 mx-auto overflow-hidden text-gray-800 bg-gray-100 shadow-lg resize-x rounded-xl min-w-80"
        x-data="app()"
        x-init="generatePassword()"
      >
        <div className="relative mt-1">
          <input
            type="text"
            id="password"
            className="w-full py-2 pl-3 pr-10 transition-colors border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your URL"
          />
          <button className="absolute inline-flex items-center text-sm text-center text-gray-400 transition-colors w-26 h-7 leading-0 top-2 right-5 focus:outline-none hover:text-gray-900">
            Shorten <Icon icon="akar-icons:arrow-right" />
          </button>
        </div>
 
        <div className="absolute top-0 left-0 flex w-full h-2">
          <div className="flex-1 h-2 bg-red-500"></div>
        </div>
      </div>
    </div>
  );
}

export default URLShortenerForm;

//<script src="https://code.iconify.design/2/2.0.4/iconify.min.js"></script>;
/* Rainbow Colors
          <div className="flex-1 h-2 bg-red-500"></div>
          <div className="flex-1 h-2 bg-yellow-500"></div>
          <div className="flex-1 h-2 bg-yellow-300"></div>
          <div className="flex-1 h-2 bg-green-500"></div>
          <div className="flex-1 h-2 bg-blue-500"></div>
          <div className="flex-1 h-2 bg-purple-700"></div>
*/