import React from 'react';
import { Icon } from '@mdi/react';
import { mdiServer } from '@mdi/js';

const PrivacyFirst = () => {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto flex justify-center">
        <div className="lg:max-w-7xl flex flex-col items-center justify-center text-center">
          <h2 className="font-black text-5xl mb-6">
            <span className="text-transparent decoration-clone bg-clip-text bg-gradient-to-r from-torch-500 to-torch-700">
            Privacy-first
            <br/>
            </span>
            and easy to use
          </h2>
          <div className="mb-4 font-bold text-2xl">
            Respecting your privacy, without compromising on user experience.
          </div>
          <div className="mb-6 text-lg max-w-prose">
            We feel it is important to provide options for users who want ease of use, while respecting your privacy.
            <br />
            To achieve that, we build <b>opt-in</b>, <b>privacy-respecting</b> features aimed at making your experience as easy as possible.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyFirst;
