import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <nav className="flex justify-between bg-gray-800 py-2 px-5">
      <div className="flex items-center justify-center">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li className={`mr-3 ${pathname === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}>Home</li>
          </Link>
          <Link href="/about">
            <li className={`mr-3 ${pathname === "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}>About</li>
          </Link>
          <Link href="/about/profile">
            <li className={`mr-3 ${pathname === "/about/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}>Profile</li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <div className="flex justify-center items-center">
            <Image src="/images/profile.png" alt="profile" width={40} height={40} className="rounded-full w-10 h-10 mr-3" />
            <h4 className="text-white mr-3">{session?.user?.fullname}</h4>
            <button onClick={() => signOut()} className="bg-white px-3 rounded-md text-sm h-7 cursor-pointer">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => signIn()} className="bg-white px-3 rounded-md text-sm h-7 cursor-pointer">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
