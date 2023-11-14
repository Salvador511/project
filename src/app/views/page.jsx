'use client'

import Link from "next/link";
import React, { Component } from 'react';
import Image from 'next/image';

class profileSelection extends Component {
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
            <h2 className="text-2xl mb-4">Estudiante</h2>
            <h4 className="my-2">¡Hola amiguito/a!</h4>
            <p className="my-2">Bienvenido/a a nuestra increíble página de aprendizaje de matemáticas. Aquí, las matemáticas son como un juego emocionante y divertido. ¡Vamos a descubrir juntos el fascinante mundo de los números! ¡Únete a nosotros y hagamos de las matemáticas algo realmente genial!</p>
            <div className="item-center justify-center my-4">
            <Link href="/views/students">
                <button className="w-full cursor-pointer transition ease-in-out delay-150 bg-slate-500  hover:bg-rose-400 duration-500 text-white font-bold py-2 px-4 rounded mt-4">Ingresa ahora</button>
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
            <h2 className="text-2xl mb-4">Docente</h2>
            <h4 className="my-2">Estimado/a Maestro/a,</h4>
            <p className="my-2">Le damos la bienvenida a nuestra plataforma educativa de matemáticas. Queremos ser la herramienta que haga que su enseñanza sea aún más efectiva y emocionante. Descubra recursos avanzados y una experiencia educativa enriquecedora para usted y sus estudiantes. Únase a nosotros para hacer de las matemáticas una aventura de aprendizaje inolvidable.</p>
            <div className="item-center justify-center my-4">
            <Link href="/views/teachers">
                <button className="w-full cursor-pointer transition ease-in-out delay-150 bg-slate-500  hover:bg-teal-600 duration-500 text-white font-bold py-2 px-4 rounded mt-4">Ingrese ahora</button>
            </Link>
            </div>
            </div>
        </div>
    </div>
    );
  }
}

export default profileSelection;
