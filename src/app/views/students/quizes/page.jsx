'use client'

import Link from "next/link";
import React, { Component } from 'react';
import Image from 'next/image';

class selectorquiz extends Component {
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
        <div className="max-sm:hidden justify-around flex flex-row items-center w-full">
        <img className="w-1/4" src="/images/student.png" alt="" />
            <img className="w-1/4" src="/images/teacher.png" alt="" />
        </div>
        <div className="flex flex-col md:flex-row text-center items-center justify-center">
            <div className="m-4 text-white bg-red-600 rounded-lg p-4">
            <h2 className="text-2xl mb-4">Examen de sumas</h2>
            <h4 className="my-2">Preparate para un examen</h4>
            <p className="my-2">Hoy, están a punto de embarcarse en una emocionante misión de sumas. ¿Están listos para enfrentar el desafío? Este examen les permitirá demostrar sus habilidades de sumar con confianza y precisión. Recuerden, cada problema es una oportunidad para brillar. ¡Así que, sin más preámbulos, adelante y que comience la aventura matemática!</p>
            <p className="my-2">Para contestar este examen selecciona la respuesta correcta en cada pregunta, una vez seleccionada no habra vuelta atras</p>
            <div className="item-center justify-center my-4">
            <Link href="/views/students/signin">
                <button className="w-full cursor-pointer transition ease-in-out delay-150 bg-slate-500  hover:bg-rose-400 duration-500 text-white font-bold py-2 px-4 rounded mt-4">Comienza ahora</button>
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
            <h2 className="text-2xl mb-4">Examen de restas</h2>
            <h4 className="my-2">Preparate para este examen</h4>
            <p className="my-2">
                Bienvenidos al desafío de hoy: un examen de restas lleno de intrigantes problemas. Este es el momento de demostrar su destreza en el arte de restar. Cada pregunta es una oportunidad para mostrar cómo enfrentan los números con valentía y habilidad. ¡Así que, sin más demora, sumérjanse en este viaje matemático y demuestren su dominio en el mundo de las restas!
            </p>
            <p className="my-2">Para contestar este examen selecciona la respuesta correcta en cada pregunta, una vez seleccionada no habra vuelta atras</p>
            <div className="item-center justify-center my-4">
            <Link href="/views/students/login">
                <button className="w-full cursor-pointer transition ease-in-out delay-150 bg-slate-500  hover:bg-teal-600 duration-500 text-white font-bold py-2 px-4 rounded mt-4">Comienza ahora</button>
            </Link>
            </div>
            </div>
        </div>
    </div>
    );
  }
}

export default selectorquiz;
