const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-6 lg:gap-y-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold">
                Get the latest from Global Health Opinion
              </h2>
              <p className="mt-4 text-white">
                Discover the latest updates, exclusive insights, and engaging
                news curated just for you. Join our community and explore a
                world of knowledge delivered straight to your inbox.
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Second Opinion
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Telemedicine
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Meet the Team
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold">Resources</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    E-books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
