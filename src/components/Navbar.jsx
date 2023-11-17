import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


async function Navbar() {
  
  const session = await getServerSession(authOptions);
  console.log("pinshe opeope")
  console.log(session);

  

  return (
    <nav className="flex justify-between items-center bg-purple-700 text-white px-24 py-3">
      <h1 className="text-xl font-bold">Aritmos</h1>
      <ul className="flex gap-x-2">
        {!session?.user ? (
          <>
          
            <li>
              <Link href="/auth/dashboard">Home</Link>
            </li>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/auth/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/api/auth/signout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
