import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


async function Navbar() {
  
  const session = await getServerSession(authOptions);
  console.log(session);

  

  return (
    <nav className="flex justify-between items-center bg-purple-700 text-white max-lg:px-4 px-16 py-1">
        <div className="flex items-center justify-center">
        <img src="/images/logo.png" alt="" />
      <h1 className="text-xl font-bold">Aritmos</h1>
        </div>
      <ul className="flex gap-x-2">
        {!session?.user ? (
          <>
          
            <li>
              <Link className="hover:text-orange-400" href="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-orange-400" href="/auth/login">Login</Link>
            </li>
            <li>
              <Link className="hover:text-orange-400" href="/auth/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="hover:text-orange-400" href="/auth/users">Home</Link>
            </li>
            {!session?.user?.isprofessor ? (
                <li>
                 <Link className="hover:text-orange-400" href={`/auth/users/students/dashboard/${session.user.id}`}>profile</Link>
                </li>
            ) : (
                <li>
                    <Link className="hover:text-orange-400" href={`/auth/users/professors/dashboard/${session.user.id}`}>profile</Link>
                </li>
            )}
            
            <li>
              <Link className="hover:text-orange-400" href="/api/auth/signout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
