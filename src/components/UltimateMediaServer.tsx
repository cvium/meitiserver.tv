import React from 'react';
import { Icon } from '@mdi/react';
import { mdiServer } from '@mdi/js';

const UltimateMediaServer = () => {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 mx-4 lg:mx-24 lg:flex-grow-0">
          <div className="p-4 order-1 lg:order-2 text-torch-700">
            <Icon className="lg:ml-4 mdi-icon" size={16} path={mdiServer} />
          </div>
          <div className="order-2 lg:order-1 lg:max-w-7xl lg:ml-48 flex flex-col items-start justify-center">
            <h2 className="font-black text-5xl mb-6">
              The ultimate
              <br />
              <span className="text-transparent decoration-clone bg-clip-text bg-gradient-to-r from-torch-500 to-torch-700">
              media server
              </span>
            </h2>
            <div className="mb-4 font-bold text-2xl">
              See all your content in one place.
            </div>
            <div className="mb-6 text-lg">
              Meiti supports most media types, with a focus on providing as<br />
              much information as possible and makiong it look beautiful.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateMediaServer;
