import React from "react";
const services = [
  {
    title: "Custom Website Design in Los Angeles",
    id: 1,
    description:
      "We create visually stunning and user-friendly websites that reflect your brand’s identity. Our designs are crafted to engage visitors and convert them into loyal customers.",
  },
  {
    title: "Professional Web Development in California",
    id: 2,
    description:
      "Our development team builds robust, scalable, and secure websites using the latest technologies. We ensure your site performs seamlessly across all platforms, providing an optimal user experience.",
  },
  {
    title: "Responsive Design for All Devices",
    id: 3,
    description:
      "In today’s mobile-driven world, it’s crucial that your website functions flawlessly on all devices. We ensure your site is fully responsive, offering a consistent experience whether accessed on a desktop, tablet, or smartphone.",
  },
  {
    title: "SEO-Optimized Landing Pages",
    id: 4,
    description:
      "Our SEO experts develop landing pages optimized for search engines, enhancing your visibility in local search results. By incorporating targeted keywords and adhering to SEO best practices, we help drive organic traffic to your site.",
  },
];
const Services = () => {
  return (
    <section id="services" className="flex flex-col items-center justify-center py-36">
      <h2 className="text-6xl font-extrabold text-brand-primary">Services</h2>
      <table className="w-4/5 table-fixed">
        <tbody className="">
          {services.map((service) => (
            <tr
              key={service.id}
              className="flex flex-col border-b-2 md:flex-row"
            >
              <td className="py-10 text-3xl font-extrabold md:py-16 md:px-12 text-dark-primary-text md:w-1/2 font-heading">
                {service.title}
              </td>
              <td className="py-10 text-justify md:py-16 md:pr-12 md:w-1/2">
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
