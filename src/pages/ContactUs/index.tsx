import Container from "@/components/Container";
import SimpleLayout from "@/layouts/SimpleLayout";
import BgImage from "@/assets/2.png";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const Addresses = () => {
  return (
    <div className="p-10">
      <div className="text-5xl font-medium text-primary text-center my-5 mb-10">
        Our locations
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-white shadow p-5">
          <div className="font-bold">United States of America</div>
          <div className="py-3">
            <div>GLOBAL HEALTH OPINION INC</div>
            <div>17424 W GRAND PKWY S STE 576 SUGAR LAND, TX 77479</div>
          </div>
        </div>

        <div className="bg-white shadow p-5">
          <div className="font-bold">United Arab Emirates</div>
          <div className="py-3">
            <div>GO4A, Ground Floor, Block A, Ibn Sina Building 27,</div>
            <div>Dubai Healthcare City,</div>
            <div>Dubai, UAE</div>
          </div>
        </div>

        <div className="bg-white shadow p-5">
          <div className="font-bold">India</div>
          <div className="py-3">
            <div>2956 A3, 3rd Floor, Jain Chambers,</div>
            <div>Edapally, Kochi 682024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Stay connected
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder=""
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder=""
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center bg-primary text-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

const ContactUsPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <SimpleLayout>
      <Container className="xl:hidden bg-slate-100">
        <div className="flex lg:items-center h-full p-10 pb-0">
          <div className="text-6xl font-bold max-w-xl" dir={i18n.dir()}>
            {t("contactPageHeaderTitle")}
            <div
              className="text-xl text-gray-400 my-10 font-medium max-w-lg"
              dir={i18n.dir()}
            >
              {t("contactPageHeaderSubtitle")}
            </div>
          </div>
        </div>
      </Container>

      <div
        className="h-[50vh] xl:h-[70vh] flex bg-slate-100"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <Container className="hidden xl:block">
          <div className="flex lg:items-center h-full py-10">
            <div
              className="text-6xl font-bold  sm:max-w- xl:max-w-sm lg:max-w-xl"
              dir={i18n.dir()}
            >
              {t("contactPageHeaderTitle")}
              <div
                className="text-xl text-gray-400 my-10 font-medium max-w-lg"
                dir={i18n.dir()}
              >
                {t("contactPageHeaderSubtitle")}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="p-10 ">
        <div className="grid grid-cols-1">
          <div className="flex justify-center">
            <div className="flex space-x-4 items-center">
              <EnvelopeIcon className="h-10" />
              <div className="">info@gho.care</div>
            </div>
          </div>

          {/* <div className="flex justify-center">
            <div className="flex space-x-4 items-center">
              <PhoneIcon className="h-10" />
              <div className="">010 9876543210</div>
            </div>
          </div> */}
        </div>
      </Container>

      <ContactForm />

      <Container>
        <Addresses />
      </Container>
    </SimpleLayout>
  );
};

export default ContactUsPage;
