import Logo from "../assets/logo-footer.png";
export default function Footer() {
  return (
    <section className="relative">
      <footer className="relative bg-gray-900 text-gray-100 pt-24 pb-12 mt-52">

        <div className="pb-28  ">
          <div className="backdrop-filter backdrop-blur-3xl bg-opacity-100   newsletter-container absolute left-1/2 transform -translate-x-1/2 
          -top-16 max-w-4xl w-full rounded-xl bg-gradient-to-r from-blue-100 via-white to-green-200 p-12 shadow-lg text-center ">
            
            <h2 className="text-2xl font-bold text-gray-800">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-600 mb-4">
              Get the latest updates and news right in your inbox!
            </p>
            
               <div className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-3/4 max-w-xs"
                required
              />
              <button className="btn ml-2 bg-gradient-to-r from-green-200 via-white to-green-500 ">
                Subscribe
              </button>
               </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="pb-10">
            <img src={Logo} alt="" />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="about-us">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-gray-400 mt-2">
              We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="quick-links">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-green-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="subscribe">
              <h3 className="text-lg font-semibold">Subscribe</h3>
              <p className="text-gray-500">
                Subscribe our newsletter for the latest update
              </p>
              <div className="mt-4 flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
                <button className="btn bg-gradient-to-r from-green-200 via-white to-green-500  ml-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center pt-16 text-gray-500">
              2024 @Ismail All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
