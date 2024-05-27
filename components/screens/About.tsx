import React from "react";
import KeyPoints from "../includes/KeyPoints";

const About = () => {
  return (
    <section id="about" className="aboutSection px-20 py-36 w-full">
      <div className="top mb-36">
        <h1 className="font-semibold text-center md:text-left text-3xl md:text-6xl mb-4">
          About Me & <br /> How I can Help you
        </h1>
      </div>
      <div className="bottom px-2 md:px-36">
        <div className="top mb-10">
          <span className="text-xl font-medium block mb-2">My Approach</span>
          <p>
            Struggling to create a compelling online presence that stands out in
            the crowded digital landscape? I specialize in designing and
            developing beautiful, user-friendly websites tailored to your unique
            needs. With my expertise, I&apos;ll transform your ideas into a
            professional and engaging web experience that attracts and retains
            customers, giving your business the competitive edge it deserves.
          </p>
        </div>
        <div className="bottom flex flex-col lg:flex-row flex-grow items-center justify-center flex-wrap gap-5 space-x-0 md:space-x-10 space-y-10  ">
          <KeyPoints
            count="1"
            title="Unique Designs"
            desc="I create unique and visually appealing designs tailored to your brand, ensuring your website stands out from the competition and resonates with your target audience."
          />

          <KeyPoints
            count="2"
            title="Responsive Layouts"
            desc="I develop websites that look and perform perfectly on any device, providing a seamless user experience whether your customers are on a desktop, tablet, or mobile."
          />

          <KeyPoints
            count="3"
            title="SEO Optimization"
            desc="I optimize your website for search engines, increasing your visibility online and driving more organic traffic to your site."
          />

          <KeyPoints
            count="4"
            title="Fast Loading Speeds"
            desc="I ensure your website loads quickly, minimizing wait times for users and improving your site's overall performance and user satisfaction."
          />

          <KeyPoints
            count="5"
            title="Secure and Reliable"
            desc="I implement robust security measures to protect your website from threats, ensuring your data and your customers data are safe and secure."
          />

          <KeyPoints
            count="6"
            title="Easy Management"
            desc="I build websites with intuitive content management systems, allowing you to easily update and manage your site without needing extensive technical knowledge."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
