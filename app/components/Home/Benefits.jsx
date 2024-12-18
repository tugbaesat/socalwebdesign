import React from "react";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="flex flex-col items-center justify-start bg-black bg-opacity-50 py-36 hollywood text-dark-primary-text"
    >
      <h2 className="w-4/5 py-16 text-6xl font-extrabold ">
        Why Choose Us for Website Design and Development in Los Angeles?
      </h2>
      <ul className="z-30 flex flex-col items-center justify-center w-4/5 gap-4 lg:flex-row">
        <li className="flex flex-col gap-2 p-6 glassBox">
          <h4 className="text-3xl font-extrabold text-brand-primary">Local Expertise</h4>
          <p className="text-justify ">
            As a Los Angeles-based company, we understand the local market and
            can tailor your website to appeal to your target audience in
            neighborhoods like Hollywood, Downtown LA, and Venice Beach.
          </p>
        </li>
        <li className="flex flex-col gap-2 p-6 glassBox">
          <h4 className="text-3xl font-extrabold text-brand-primary ">
            Customized Solutions
          </h4>
          <p className="text-justify ">
            We don’t believe in one-size-fits-all. Our team works closely with
            you to develop a website that aligns with your business goals and
            brand identity.
          </p>
        </li>
        <li className="flex flex-col gap-2 p-6 glassBox">
          <h4 className="text-3xl font-extrabold text-brand-primary">
            Proven Track Record
          </h4>
          <p className="text-justify ">
            With a portfolio of successful projects for businesses across Los
            Angeles, we have a history of delivering results that exceed
            expectations.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
