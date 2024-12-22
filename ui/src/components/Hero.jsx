import React from "react";
import HeroImage from "../assets/Signin-bg.png"; // Replace with your image path
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-[87.3vh] w-screen bg-gradient-to-r from-secondary to-primary-dark flex items-center justify-center text-white/90">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-20">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Disaster Relief <br />
            <span className="text-white/30">Management Made Easy</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/70">
            Join our platform to streamline disaster relief efforts and make a
            difference in communities in need. Get started by signing up or
            learning more.
          </p>
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <Link
              to={"/signup"}
              className="border border-white shadow-lg text-white font-semibold px-6 py-3 rounded-sm hover:bg-green-600 hover:border-green-600 hover:translate-x-1 transition duration-200 flex"
            >
              <Play className="pr-1"/>
              Get Started
            </Link>
            <Link
              to={"/about"}
              className="border border-green-600 bg-green-600 shadow-lg text-white font-semibold px-6 py-3 rounded-sm hover:bg-transparent hover:border-white transition duration-200 hover:translate-x-1 "
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
