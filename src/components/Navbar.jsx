'use client'

import Link from "next/link";
import React, { Component} from 'react';
import Image from 'next/image';

class Navbar extends Component {
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
    <nav className="bg-purple-900">
        <div className="container mx-auto flex flex-row justify-between py-3">

            <Link href='/' className="flex flex-row justify-center items-center">
                <Image
                    src={logo}
                    alt="img"
                    width={40}
                    height={40}
                    objectFit="contain"
                />
                <h3 className=" text-white font-bold text-2xl">ARITMOS</h3>
            </Link>

            <div>
            <ul className="flex gap-x-2 text-lg">
                <li>
                    <Link href="/login"
                        className=" text-slate-300 hover:text-slate-200"
                        >Login</Link>
                </li>

                <li>
                    <Link href="/signin"
                        className=" text-slate-300 hover:text-slate-200"
                        >Sign In</Link>
                </li>

                <li>
                    <Link href="/new"
                        className=" text-slate-300 hover:text-slate-200"
                    >Profile</Link>
                </li>

                <li>
                    <Link href="/about"
                        className=" text-slate-300 hover:text-slate-200"
                    >Courses</Link>
                </li>
                
                <li>
                    <Link href="/games"
                        className=" text-slate-300 hover:text-slate-200"
                    >Games</Link>
                </li>

                <li>
                    <Link href="/quizes"
                        className=" text-slate-300 hover:text-slate-200"
                    >Quizes</Link>
                </li>


            </ul>
            </div>
        </div>
    </nav>
  )
}
}

export default Navbar