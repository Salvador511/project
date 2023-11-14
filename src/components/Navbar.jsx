'use client'

import Link from "next/link";
import React, { Component } from 'react';
import Image from 'next/image';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo_xl: '/images/logo-xl.png',
      logo: '/images/logo.png',
      isMobileMenuOpen: false, // Estado para controlar la apertura/cierre del menú móvil
    };
  }

  // Función para alternar la visibilidad del menú móvil
  toggleMobileMenu = () => {
    this.setState((prevState) => ({ isMobileMenuOpen: !prevState.isMobileMenuOpen }));
  }

  render() {
    const { logo, logo_xl, isMobileMenuOpen } = this.state;

    return (
      <div>
        <nav className="bg-purple-700">
          <div className="container mx-2 flex flex-row justify-between py-3">
            <Link href='/' className="flex flex-row justify-center items-center">
              <Image
                src={logo}
                alt="img"
                width={40}
                height={40}
              />
              <h3 className="text-white font-bold text-2xl">ARITMOS</h3>
            </Link>
            {/* Mostrar opciones en el Navbar solo cuando el tamaño de pantalla es mayor que md */}
            <div className="hidden md:flex md:space-x-2 text-lg">
              <ul className="flex space-x-2">
                <li>
                  <Link href="/views" className="text-slate-300 hover:text-orange-500">Login</Link>
                </li>
                <li>
                    <Link href="/views"
                        className=" text-slate-300 hover:text-orange-500"
                    >Sign In</Link>
                </li>

                <li>
                    <Link href="/courses"
                        className=" text-slate-300 hover:text-orange-500"
                    >Courses</Link>
                </li>
                
                <li>
                    <Link href="/views/students/games"
                        className=" text-slate-300 hover:text-orange-500"
                    >Games</Link>
                </li>

                <li>
                    <Link href="/views/students/quizes"
                        className=" text-slate-300 hover:text-orange-500"
                    >Quizes</Link>
                </li>
              </ul>
            </div>
            <button
              className="md:hidden text-white text-3xl mr-4"
              onClick={this.toggleMobileMenu}
            >
              ☰
            </button>
          </div>
        </nav>
        
        {/* Menú móvil desplegable */}
        {isMobileMenuOpen && (
          <div className="bg-purple-700 text-white md:hidden ">
            <ul className="text-lg p-3 text-center justify-center">
              <li className="m-1">
                <Link href="/views" className="text-slate-300 hover:text-orange-500">Login</Link>
              </li>
              <li className="m-1">
                    <Link href="/views"
                        className=" text-slate-300 hover:text-orange-500"
                    >Sign In</Link>
                </li>

                <li className="m-1">
                    <Link href="/courses"
                        className=" text-slate-300 hover:text-orange-500"
                    >Courses</Link>
                </li>
                
                <li className="m-1">
                    <Link href="/views/students/games"
                        className=" text-slate-300 hover:text-orange-500"
                    >Games</Link>
                </li>

                <li className="m-1">
                    <Link href="/views/students/quizes"
                        className=" text-slate-300 hover:text-orange-500"
                    >Quizes</Link>
                </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
