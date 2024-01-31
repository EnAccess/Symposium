
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <img src="/logo.png" alt="Logo" className="mr-4 h-8" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/agenda" className="text-gray-700 hover:text-gray-900">Agenda</a></li>
              <li><a href="/speakers" className="text-gray-700 hover:text-gray-900">Speakers</a></li>
              <li><a href="/attend" className="text-gray-700 hover:text-gray-900">Attend</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
          <a href="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register
        </a>
        </div>
       
      </div>
    </header>
  );
};

export default Header;
