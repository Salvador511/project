'use client'
import React, { Component} from 'react';
import Image from 'next/image';

class login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        logo_xl: '/images/logo-xl.png',
        logo: '/images/logo.png'
      };
      }
      render() {
        const { logo, logo_xl} = this.state;
        return (
      <div className="bg-image" style={{ backgroundImage: "url('/public/images/aprendematematicas.b50431b2.avif')", backgroundRepeat: "no-repeat" }}>
    <section className=" min-h-screen flex items-center justify-center">
        <div className="bg-gray-400  flex rounded-2xl shadow-lg max-w-5xl p-5 items-center justify-center">
            <div class="md:w-1/2 px-16">
                <h2 class="font-bold text-7xl text-orange-500">LOGIN</h2>
                <p class="text-lg mt-4 text-black">
                    If you're already a student/teacher
                </p>
                <form action="" class="flex flex-col gap-4">
                    <input class="p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="email"/>
                    <div class="relative">
                        <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="password"/>
                    </div>
                    <button class="bg-orange-500 rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                </form>
                <div class="mt-10 grid grid-cols-3 items-center text-gray-500">
                    <hr class="border-gray-500"/>
                    <p class="text-center">OR</p>
                    <hr class="border-gray-500"/>
                </div>
                <button class="bg-white text-cyan-500 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300">Register Now</button>
            </div>
            <div class="sm:block hidden w1/2">
                <Image
                className='rounded-2xl animate-bounce'
                src={logo_xl}
                alt="img"
                width={250}
                height={250}
                objectFit="contain"
                />
            </div>

        </div>
    </section>
    </div>
        )
};
}
export default login;
