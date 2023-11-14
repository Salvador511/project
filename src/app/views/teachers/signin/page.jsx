'use client'
import React, { Component} from 'react';
import Image from 'next/image';

class signin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        logo_xl: '/images/logo-xl.png',
        logo: '/images/logo.png',
        back: '/images/aprendematematicas.b50431b2.avif'
      };
      }
      render() {
        const { logo, logo_xl, back} = this.state;
        return (
            <div className="bg-[url('/images/aprendematematicas.b50431b2.avif')] backdrop: backdrop-blur-3xl">
            <section className="min-h-screen flex items-center justify-center">
                <div className="flex rounded-2xl max-w-5xl p-5 items-center justify-around shadow-2xl shadow-black">
            <div class="md:w-1/2 px-16">
                <h2 class="font-bold text-7xl text-white">Register</h2>
                <p class="text-lg mt-4 text-white">
                    Create a new account
                </p>
                <form action="" class="flex flex-col gap-2">
                    <div class="relative">
                        <input class="p-2 rounded-xl border w-full" type="text" name="firstName" placeholder="First Name"/>
                    </div>
                    <div class="relative">
                        <input class="p-2 rounded-xl border w-full" type="text" name="lastName" placeholder="Last Name"/>
                    </div>
                    <div class="relative">
                        <input class="p-2 rounded-xl border w-full" type="text" name="email" placeholder="Email"/>
                    </div>
                    <div class="relative">
                        <input class="p-2 rounded-xl border w-full" id="pass1" type="password" name="password" placeholder="Password"/>
                    </div>
                    <div class="relative">
                        <input class="p-2 rounded-xl border w-full" id="pass2" type="password" name="password2" placeholder="Confirm Password"/>
                    </div>
                    <button id="boton" class="bg-gradient-to-r from-purple-600 to-orange-600 rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
                </form>
                <div class="mt-10 grid grid-cols-3 items-center text-gray-400">
                    <hr class="border-gray-400"/>
                    <p class="text-center">OR</p>
                    <hr class="border-gray-400"/>
                </div>
                <button class="bg-purple-600 text-white py-2 w-full rounded-xl hover:scale-105 duration-300">Login Now</button>
            </div>
            <div class="sm:block hidden w1/2">
                <Image
                    className='rounded-2xl animate-bounce'
                    src={logo_xl}
                    alt="img"
                    width={250}
                    height={250}
                />
            </div>

            </div>
    </section>
    </div>
    )
};
}
export default signin;