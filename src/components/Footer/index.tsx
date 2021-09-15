import React from 'react';

function Footer(): JSX.Element {
  return (
    <footer className="bg-secondary">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          <a
            href="https://github.com/jamessizeland/Next-Typescript-Boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Sourcecode
          </a>
        </li>
        <li>
          <p>Version: 1.0.0</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
