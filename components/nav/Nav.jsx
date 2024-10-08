import Link from "next/link";


const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <p>MyWebsite</p>
        </div>
        <ul className="flex space-x-4">
          <li className="text-white" >
            <Link href="/" >
              Home
            </Link>
          </li>
          <li className="text-white" >
            <Link href="/admin" >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
