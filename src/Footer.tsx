import { Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-16 pt-3 lg:mt-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold">accredian</h2>
          <p className="text-sm text-gray-400">Credentials that matter</p>
        </div>

        {/* Middle Section - Programs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="text-gray-300 space-y-2">
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program, index) => (
              <li key={index} className="flex justify-between items-center">
                {program} <span className="text-blue-400">+</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact & Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">Email (Data Science): admissions@accredian.com</p>
          <p className="text-sm text-gray-400">Email (Product Management): pm@accredian.com</p>
          <p className="text-sm text-gray-400">Helpline (Data Science): +91 90765 93292</p>
          <p className="text-sm text-gray-400">Helpline (Product Management): +91 9625815095</p>
          <p className="text-sm text-gray-400">Enrolled Student Helpline: +91 7969223507</p>
          <p className="text-sm text-gray-400">Office: 4th Floor, 250, Phase IV, Udyog Vihar, Gurugram</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 justify-center items-center">
            <Facebook className="text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
            <Youtube className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm mt-6">
        © 2024 Accredian, A Brand of FullStack Education Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
