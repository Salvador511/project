'use client'

import Link from "next/link";
import React, { Component } from 'react';
import Image from 'next/image';

class GameSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plusle: '/gifs/separate/Plus-Idle.gif',
      moin: '/gifs/separate/Moin-Idle.gif',
      logo_xl: '/images/logo-xl.png',
      gif:'/gifs/joined/Plus&Moin-idle.gif'
    };
  }

  render() {
    const { plusle, logo_xl, gif, moin } = this.state;

    return (
    <div className="grid grid-cols-1 bg-[url('')] bg-repeat bg-">
        <div className="max-sm:hidden justify-around flex flex-row items-center">
            <Image
                src={plusle}
                alt="suma"
                width={250}
                height={250}
            />
            <Image
                src={moin}
                alt="resta"
                width={250}
                height={250}
            />
        </div>
        <div className="flex flex-col md:flex-row text-center items-center justify-center">
            <div className="m-4 text-white bg-red-600 rounded-lg p-4">
            <h2 className="text-2xl mb-4">Summendo</h2>
            <p>¡Prepárate para un emocionante desafío matemático en "Mentes Matemáticas"! En este juego de sumas, pondrás a prueba tu agilidad mental y habilidades de cálculo. ¿Puedes alcanzar la puntuación máxima y demostrar que eres una mente matemática brillante?</p>
            <div className="item-center justify-center my-4">
            <Link href="/games/addition">
                <button className="w-full cursor-pointer transition ease-in-out delay-150 bg-slate-500  hover:bg-rose-400 duration-500 text-white font-bold py-2 px-4 rounded mt-4">Jugar contra Plusle</button>
            </Link>
            </div>
            </div>

            <div>
                <div className="md:hidden">
                <Image
                    src={gif}
                    alt="GIF"
                    width={250}
                    height={250}
                />
                </div>
            </div>

            <div className="m-4 text-white bg-indigo-800 rounded-lg p-4 text-center">
            <h2 className="text-2xl mb-4">Minuendo</h2>
            <p>¡Bienvenido al "Desafío Substractivo"! En este juego de restas, te enfrentarás a una variedad de rompecabezas numéricos que pondrán a prueba tu capacidad para restar con rapidez y precisión. ¿Tienes lo que se necesita para convertirte en el campeón del desafío substractivo?</p>
            <div className="item-center justify-center my-4">
            <Link href="/games/substraction">
                <button className="w-full cursor-pointer transition ease-in-out delay-150 bg-slate-500  hover:bg-teal-600 duration-500 text-white font-bold py-2 px-4 rounded mt-4">Jugar contra Moin</button>
            </Link>
            </div>
            </div>
        </div>
    </div>
    );
  }
}

export default GameSelection;
