import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { getUser } from '../../store/user/userReducer';
import { useAppSelector } from '../../store/hooks';

const Header = (): JSX.Element => {
  const user = useAppSelector(getUser); // pulled from redux global state
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-gray-600">
      <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Image
            src="/longtail.png"
            width={40}
            height={40}
            priority
            alt="Template image"
          />
          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-white">
              Next React Template
            </a>
          </Link>
          <p>
            {user ? 'User: ' : ''} {user}
          </p>
        </div>

        <button
          className="flex items-center px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            'md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto',
            mobileMenuIsOpen ? 'block' : 'hidden',
          )}
        >
          {[
            { title: 'Home', route: '/' },
            { title: 'About', route: '/about' },
            { title: 'Graphs', route: '/graph' },
            { title: 'Debug', route: '/debug' },
            { title: 'Login', route: '/login' },
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a className="block text-white">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
