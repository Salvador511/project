import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-900">
        <div className="container mx-auto flex justify-between py-3">

            <Link href='/'>
                <h3 className=" text-white font-bold text-2xl">ARITMOS</h3>
            </Link>

            <ul className="flex gap-x-2 text-lg">
                <li>
                    <Link href="/"
                        className=" text-slate-300 hover:text-slate-200"
                        >Home</Link>
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
                    <Link href="/about"
                        className=" text-slate-300 hover:text-slate-200"
                    >Games</Link>
                </li>

                <li>
                    <Link href="/about"
                        className=" text-slate-300 hover:text-slate-200"
                    >Courses</Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar