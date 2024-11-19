import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="About Us"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-full"
          />
        </div>

        {/* Description Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Assessors Office Pangasinan! We are committed to providing the best
            services to our clients, ensuring quality and satisfaction in
            everything we do. With a dedicated team and years of expertise, we
            aim to exceed expectations and build lasting relationships with our
            customers. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius blanditiis repudiandae modi velit, cupid itate eos
            exercitationem earum ducimus est soluta.
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed">
            Assessors Office Pangasinan! We are committed to providing the best
            services to our clients, ensuring quality and satisfaction in
            everything we do. With a dedicated team and years of expertise, we
            aim to exceed expectations and build lasting relationships with our
            customers. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius blanditiis repudiandae modi velit, cupid itate eos
            exercitationem earum ducimus est soluta.
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed">
            Assessors Office Pangasinan! We are committed to providing the best
            services to our clients, ensuring quality and satisfaction in
            everything we do. With a dedicated team and years of expertise, we
            aim to exceed expectations and build lasting relationships with our
            customers. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius blanditiis repudiandae modi velit, cupid itate eos
            exercitationem earum ducimus est soluta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
