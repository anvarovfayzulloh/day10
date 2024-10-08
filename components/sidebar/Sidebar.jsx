import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="max-w-[350px] w-full h-full bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-4">Сайдбар</h2>
      <nav className="flex-1">
        <ul>
          <li>
            <Link href="/admin" className="block p-4 hover:bg-gray-700">Главная</Link>
          </li>
          <li>
            <Link href="/admin/users" className="block p-4 hover:bg-gray-700">Пользователи</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
