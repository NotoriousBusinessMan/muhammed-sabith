import Banner from "@/components/includes/Banner";
import Footer from "@/components/includes/Footer";
import Navbar from "@/components/includes/Navbar";
import About from "@/components/screens/About";
import Contact from "@/components/screens/Contact";
import Hero from "@/components/screens/Hero";
import Skills from "@/components/screens/Skills";
import Works from "@/components/screens/Works";

export default function Home() {
  return (
    <>
      <div className="!scroll-smooth">
        <Navbar />
        <Hero />
        <Banner
          title="The Problem"
          content={
            <span
              dangerouslySetInnerHTML={{
                __html: `
          <b>Many people struggle with establishing a strong online presence
          due to a lack of professional design, slow loading times, poor mobile
          optimization, weak SEO strategies, security vulnerabilities, and
          difficulty managing website content.</b> These issues can lead to a subpar
          user experience, lower search engine rankings, and ultimately, lost
          opportunities for business growth and customer engagement.
        `,
              }}
            />
          }
        />
        <About />
        <Banner
          title="The Cost Issue"
          content={
            <span
              dangerouslySetInnerHTML={{
                __html: `
              High-quality websites can be expensive due to costly design services, complex development, and ongoing maintenance. Many agencies charge premium prices, making it hard for small businesses to afford. 
              <b>I offer competitive rates by streamlining processes and using efficient technologies, providing exceptional websites without the high price tag, allowing clients to invest more in their growth.</b>
            `,
              }}
            />
          }
        />

        <Skills />
        <Banner
          title="Why Choose Me?"
          content={
            <span
              dangerouslySetInnerHTML={{
                __html: `
          Choosing the right developer makes a difference. I offer:
          <b> Experience, Quality, Affordability, Personalized Service, </b>
          and <b>Continuous Support.</b> 
          Get a high-quality, cost-effective, and tailored web development experience.
        `,
              }}
            />
          }
        />

        <Works />
        <Banner
          title="How It Feels to Have a Website"
          content={
            <span
              dangerouslySetInnerHTML={{
                __html: `
          Having a website gives you:
          <b> Credibility, Accessibility, Growth, Engagement, </b>
          and <b>24/7 Presence.</b> 
          Experience the pride of showcasing your business or passion to the world with ease.
        `,
              }}
            />
          }
        />

        <Contact />
        <Footer />
      </div>
    </>
  );
}
