import axios from 'axios';
import React, { useState } from 'react';
import { Icon } from "@iconify/react";

function URLShortenerForm() {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    debugger; 
    console.log("Link generated.");
    var shortenBtn = document.getElementById("shortenBtn");
    var copyBtn = document.getElementById("copyBtn");
    var linkInput = document.getElementById("linkInput");

    if (shortenBtn != null) {
      shortenBtn.classList.add("hidden");
    }
    if (copyBtn != null) {
      copyBtn.classList.remove("hidden");
    }

    if (linkInput != null) {
      linkInput.classList.remove("border-gray-200");
      linkInput.classList.add("border-green-500")
    }
    

  }


  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center min-h-screen px-5 py-5 bg-gray-800 min-w-screen">
        <div
          className="relative w-full max-w-3xl p-10 mx-auto overflow-hidden text-gray-800 bg-gray-100 shadow-lg resize-x rounded-xl min-w-80"
          x-data="app()"
          x-init="generatePassword()"
        >
          <div className="relative mt-1">
            <input
              type="text"
              id="linkInput"
              className="w-full py-2 pl-3 pr-10 transition-colors border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your URL"
            />
            <button id="shortenBtn" className="absolute inline-flex items-center text-sm text-center text-gray-400 transition-colors w-26 h-7 leading-0 top-2 right-5 focus:outline-none hover:text-gray-900" type="submit">
              Shorten <Icon icon="akar-icons:arrow-right" />
            </button>

            <button id="copyBtn" className="absolute inline-flex items-center hidden text-sm text-center text-gray-400 transition-colors w-26 h-7 leading-0 top-2 right-5 focus:outline-none hover:text-gray-900">
              Copy <Icon icon="akar-icons:copy" />
            </button>
            
            <button className="absolute inline-flex items-center hidden text-sm text-center text-green-500 transition-colors w-26 h-7 leading-0 top-2 right-5">
              Copied <Icon icon="akar-icons:check" />
            </button>


          </div>

          <div className="relative mt-1">
            <p className="text-sm text-center text-gray-400 transition-colors">By clicking on "Shorten" you accept our TOS and Privacy Policy.</p>
          </div>
  
          <div className="absolute top-0 left-0 flex w-full h-2">
            <div className="flex-1 h-2 bg-red-500"></div>
          </div>

          <div className="relative mt-5">
            <div className="flex items-center space-x-4 text-gray-400">
              https://rlnk.be/
              <input
                  type="text"
                  id="ending"
                  className="w-full py-2 pl-3 pr-10 transition-colors border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="your-ending"
                />
              <button className="absolute inline-flex items-center text-sm text-center text-gray-400 transition-colors w-26 h-7 leading-0 top-2 right-5 focus:outline-none hover:text-gray-900">
                Save <Icon icon="akar-icons:folder" />
              </button>
              

              <button className="absolute inline-flex items-center hidden text-sm text-center text-green-500 transition-colors w-26 h-7 leading-0 top-2 right-5">
                Saved <Icon icon="akar-icons:check" />
              </button>
            </div>

          </div>

          <div className="hidden bg-rose-300">
            <img className="object-contain w-full h-48" alt="qr_code"/>
          </div>
        </div>
    </form>

    
    
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