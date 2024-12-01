import React from "react";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Workflow from "../components/WorkfFow";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Summary from "../components/Summary";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CallToAction />
        <Workflow />
        <Features />
        <Summary/>
        <Testimonials />
        <ContactUs />
      </main>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; 2024 Automated Invoice Data Manager</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
