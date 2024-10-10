import React from "react";
const services = [
  {
    title: "Web Design",
    id: 1,
    description:
      "Our web design service focuses on creating visually appealing and user-friendly interfaces. We combine aesthetics with functionality to ensure your website not only looks stunning but also provides an intuitive and engaging user experience. Whether you need a brand new design or a revamp of your existing site, we will work closely with you to bring your vision to life.",
  },
  {
    title: "Web Development",
    id: 2,
    description:
      "At LA Web Designs, we build websites that are not only beautiful but also powerful. Our web development service ensures your site is built with the latest technologies and best practices. We create custom solutions tailored to your specific business needs, ensuring your website is scalable, secure, and performs seamlessly across all platforms.",
  },
  {
    title: "Responsive for All Devices",
    id: 3,
    description:
      "In today’s mobile-first world, having a responsive website is crucial. Our responsive design service ensures your website looks and functions perfectly on any device, be it a desktop, tablet, or smartphone. We use flexible layouts, media queries, and adaptive images to provide a consistent and optimal viewing experience for your users, no matter how they access your site.",
  },
  {
    title: "SEO Optimized Landing Pages",
    id: 4,
    description:
      "Our SEO optimized landing pages are designed to improve your search engine rankings and drive more traffic to your site. We incorporate the latest SEO best practices, including keyword research, meta tags, and high-quality content, to ensure your landing pages are not only attractive but also rank well in search results. This means more visibility, more visitors, and more conversions for your business.",
  },
];
const Services = () => {
  return (
    <section id="services" className="flex flex-col items-center justify-center py-36">
      <h2 className="text-6xl font-bold text-brand-primary">Services</h2>
      <table className="w-4/5 table-fixed">
        <tbody className="">
          {services.map((service) => (
            <tr
              key={service.id}
              className="flex flex-col border-b-2 md:flex-row"
            >
              <td className="py-10 text-3xl font-bold md:py-16 md:pl-10 text-dark-primary-text md:w-1/2">
                {service.title}
              </td>
              <td className="py-10 text-justify md:py-16 md:pr-10 md:w-1/2">
                {service.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Services;
