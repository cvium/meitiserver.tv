import React from 'react';
import { Icon } from '@mdi/react';
import { mdiAccountGroup } from '@mdi/js';

const CommunityRun = () => {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 mx-4 lg:mx-24 lg:flex-grow-0">
          <div className="order-1 lg:order-2 lg:max-w-7xl flex flex-col items-start justify-center">
            <h2 className="font-black text-5xl mb-6">
              Built and run,
              <br />
              <span className="text-transparent decoration-clone bg-clip-text bg-gradient-to-r from-torch-500 to-torch-700">
              by the community
              </span>
            </h2>
            <div className="mb-4 font-bold text-2xl">
              Vote on features, contribute meaningfully and<br />
              help the project grow.
            </div>
            <div className="mb-6 text-lg">
              Meiti is made by users, for users. Whether you're translating, writing code,<br />
              designing user interfaces or anything else, your voice matters.
            </div>
          </div>
          <div className="p-4 order-2 lg:order-1 text-torch-700">
            <Icon className="lg:ml-36 lg:mr-4 lg:max-w-7xl mdi-icon" size={16} path={mdiAccountGroup} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityRun;
