import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Footer = () => {
  return (
    <div className="relative bg-gondola-900 text-thatch-500 mt-auto">
      <div className="container mx-auto py-16 lg:py-20 px-6 lg:px-0 flex flex-wrap gap-2 lg:gap-0 justify-between">
        <div className="text-center md:text-left w-full md:w-2/5 mb-10 px-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start">
            <StaticImage
              className="h-12 w-32 lg:h-16 lg:w-40"
              src="../images/banner.svg"
              title="Home"
              alt="Meiti Logo"
              objectFit="contain"
              placeholder={'none'}
            />
          </div>
          <p className="mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4">
            All site content is licensed under{' '}
            <a
              className="transition-colors text-gray-100 hover:text-torch-500"
              href="http://creativecommons.org/licenses/by-nd/4.0/"
            >
              CC-BY-ND-4.0
            </a>
          </p>
        </div>
        {/*}
        <div className="md:w-1/5">
          <h5 className="font-bold">Docs</h5>
          <ul className="mt-4 text-sm font-medium">
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition-colors text-gray-100 hover:text-torch-500"
                href="#"
              >
                Getting Started
              </a>
            </li>
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition-colors text-gray-100 hover:text-torch-500"
                href="#"
              >
                Developer Documentation
              </a>
            </li>
          </ul>
        </div>
        {*/}
        <div className="md:w-1/5">
          <h5 className="font-bold">Community</h5>
          <ul className="mt-4 text-sm font-medium">
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition-colors text-gray-100 hover:text-torch-500"
                href="https://github.com/Meiti-Media/.github/blob/master/CODE_OF_CONDUCT.md"
              >
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/5">
          <h5 className="font-bold">More</h5>
          <ul className="mt-4 text-sm font-medium">
            <li className="mt-3">
              <Link
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition-colors text-gray-100 hover:text-torch-500"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="mt-3">
              <a
                className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition-colors text-gray-100 hover:text-torch-500"
                href="https://github.com/Meiti-Media"
              >
                GitHub
              </a>
            </li>
            <li className="mt-3">
              <a href="https://www.netlify.com">
                <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="Deploys by Netlify" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
