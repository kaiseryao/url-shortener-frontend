/*import axios from 'axios';
import { useState } from 'react';*/
import { Icon } from "@iconify/react";

function URLShortenerForm() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl"
        x-data="app()"
        x-init="generatePassword()"
      >
        <div className="relative mt-1">
          <input
            type="text"
            id="password"
            className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Enter your URL"
          />
          <button className="block w-26 h-7 text-center text-sm leading-0 absolute top-2 right-5 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
            Shorten <Icon icon="akar-icons:arrow-right" />
          </button>
        </div>

        <div className="absolute top-0 left-0 w-full h-2 flex">
          <div className="h-2 bg-red-500 flex-1"></div>
          <div className="h-2 bg-yellow-500 flex-1"></div>
          <div className="h-2 bg-yellow-300 flex-1"></div>
          <div className="h-2 bg-green-500 flex-1"></div>
          <div className="h-2 bg-blue-500 flex-1"></div>
          <div className="h-2 bg-purple-700 flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export default URLShortenerForm;

//<script src="https://code.iconify.design/2/2.0.4/iconify.min.js"></script>;
