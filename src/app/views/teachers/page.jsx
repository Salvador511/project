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
            <h2 className="text-2xl mb-4">DOCENTE</h2>
            <h4 className="my-2">REGISTRATE AHORA</h4>
            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium, deserunt optio sit provident iure obcaecati nihil aspernatur soluta suscipit earum architecto sunt exercitationem? Assumenda explicabo dolor inventore architecto laboriosam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate minus quisquam vel debitis cum assumenda quod labore dolorem quibusdam dolore, qui adipisci distinctio maxime reiciendis nisi quam voluptates, itaque totam?</p>
            <div className="item-center justify-center my-4">
            <Link href="/views/teachers/signin">
                <button className="w-full cursor-pointer transition ease-in-out delay-150 bg-slate-500  hover:bg-rose-400 duration-500 text-white font-bold py-2 px-4 rounded mt-4">REGISTRATE AHORA</button>
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
            <h2 className="text-2xl mb-4">DOCENTE</h2>
            <h4 className="my-2">INGRESA AHORA</h4>
            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, delectus odio rerum magnam explicabo reiciendis illo voluptatibus tempore enim fuga sunt dolorum ea obcaecati earum hic numquam, animi, illum pariatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere, eveniet exercitationem qui dicta possimus eius accusamus inventore animi molestias asperiores, totam culpa recusandae quidem, officiis reprehenderit nostrum. Perferendis, fugiat.
            </p>
            <div className="item-center justify-center my-4">
            <Link href="/views/teachers/login">
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
