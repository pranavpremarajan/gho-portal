import Container from "@/components/Container";
import SimpleLayout from "@/layouts/SimpleLayout";
import Map from "@/assets/Map.png";

interface AddressCardProps {
  country: string;
  details: string;
  flag?: JSX.Element; // Optional JSX element for the flag
}

const AddressCard: React.FC<AddressCardProps> = ({ country, details, flag }) => (
  <div className="bg-white shadow p-5 rounded-lg">
    {flag && <div className="mb-2">{flag}</div>}
    <div className="font-bold text-lg">{country}</div>
    <div className="py-3">{details}</div>
  </div>
);

const Addresses: React.FC = () => (
  <div
    className="py-20 bg-no-repeat bg-slate-100"
    style={{
      backgroundImage: `url('${Map}')`,
      backgroundSize: "contain",
      backgroundPosition: "right",
      backgroundPositionY: "-150px",
    }}
  >
    <Container>
      <h2 className="text-4xl font-semibold mb-4 text-gray-800">Contact Us</h2>
    </Container>

    <Container>
      <div className="max-w-md w-full">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              required
              aria-labelledby="name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              required
              aria-labelledby="email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              required
              aria-labelledby="message"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Container>

    <Container className="py-10 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <AddressCard
          country="United States of America"
          details="GLOBAL HEALTH OPINION INC, 17424 W GRAND PKWY S STE 576, SUGAR LAND, TX 77479"
          flag={
            <svg
              width="45"
              height="30"
              viewBox="0 0 45 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8718_2855)">
                <path d="M0 0H45V30H0V0Z" fill="white" />
                <path
                  d="M0 0H45V2.30702H0V0ZM0 4.61404H45V6.92105H0V4.61404ZM0 9.22807H45V11.5351H0V9.22807ZM0 13.8421H45V16.1491H0V13.8421ZM0 18.4649H45V20.7719H0V18.4649ZM0 23.0789H45V25.386H0V23.0789ZM0 27.693H45V30H0V27.693Z"
                  fill="#D80027"
                />
                <path d="M0 0H22.5V16.1491H0V0Z" fill="#2E52B2" />
                <path
                  d="M4.19295 12.184L3.84208 11.0612L3.45611 12.184H2.29822L3.23681 12.8595L2.88594 13.9823L3.84208 13.2893L4.7719 13.9823L4.41225 12.8595L5.36839 12.184H4.19295ZM9.13155 12.184L8.7719 11.0612L8.40348 12.184H7.24559L8.18418 12.8595L7.83331 13.9823L8.7719 13.2893L9.71927 13.9823L9.36839 12.8595L10.307 12.184H9.13155ZM14.0877 12.184L13.7105 11.0612L13.3596 12.184H12.1754L13.1403 12.8595L12.7719 13.9823L13.7105 13.2893L14.6754 13.9823L14.307 12.8595L15.2456 12.184H14.0877ZM19.0175 12.184L18.6666 11.0612L18.2982 12.184H17.1316L18.0789 12.8595L17.728 13.9823L18.6666 13.2893L19.614 13.9823L19.2368 12.8595L20.2017 12.184H19.0175ZM8.7719 6.6051L8.40348 7.72791H7.24559L8.18418 8.42089L7.83331 9.52615L8.7719 8.84194L9.71927 9.52615L9.36839 8.42089L10.307 7.72791H9.13155L8.7719 6.6051ZM3.84208 6.6051L3.45611 7.72791H2.29822L3.23681 8.42089L2.88594 9.52615L3.84208 8.84194L4.7719 9.52615L4.41225 8.42089L5.36839 7.72791H4.19295L3.84208 6.6051ZM13.7105 6.6051L13.3596 7.72791H12.1754L13.1403 8.42089L12.7719 9.52615L13.7105 8.84194L14.6754 9.52615L14.307 8.42089L15.2456 7.72791H14.0877L13.7105 6.6051ZM18.6666 6.6051L18.2982 7.72791H17.1316L18.0789 8.42089L17.728 9.52615L18.6666 8.84194L19.614 9.52615L19.2368 8.42089L20.2017 7.72791H19.0175L18.6666 6.6051ZM3.84208 2.1665L3.45611 3.27177H2.29822L3.23681 3.96475L2.88594 5.07878L3.84208 4.3858L4.7719 5.07878L4.41225 3.96475L5.36839 3.27177H4.19295L3.84208 2.1665ZM8.7719 2.1665L8.40348 3.27177H7.24559L8.18418 3.96475L7.83331 5.07878L8.7719 4.3858L9.71927 5.07878L9.36839 3.96475L10.307 3.27177H9.13155L8.7719 2.1665ZM13.7105 2.1665L13.3596 3.27177H12.1754L13.1403 3.96475L12.7719 5.07878L13.7105 4.3858L14.6754 5.07878L14.307 3.96475L15.2456 3.27177H14.0877L13.7105 2.1665ZM18.6666 2.1665L18.2982 3.27177H17.1316L18.0789 3.96475L17.728 5.07878L18.6666 4.3858L19.614 5.07878L19.2368 3.96475L20.2017 3.27177H19.0175L18.6666 2.1665Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_8718_2855">
                  <rect width="45" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        />

        <AddressCard
          country="United Arab Emirates"
          details="GO4A, Ground Floor, Block A, Ibn Sina Building 27, Dubai Healthcare City, Dubai, UAE"
          flag={
            <svg
              width="45"
              height="30"
              viewBox="0 0 45 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8718_2857)">
                <path d="M0 0H45V30H0V0Z" fill="white" />
                <path d="M0 0H45V10H0V0Z" fill="#009E49" />
                <path d="M0 20H45V30H0V20Z" fill="black" />
                <path d="M0 0H15V30H0V0Z" fill="#CE1126" />
              </g>
              <defs>
                <clipPath id="clip0_8718_2857">
                  <rect width="45" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        />

        <AddressCard
          country="India"
          details="2956 A3, 3rd Floor, Jain Chambers, Edapally, Kochi 682024"
          flag={
            <svg
              width="45"
              height="30"
              viewBox="0 0 45 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g clipPath="url(#clip0)">
                <path d="M1.51758 0H43.4825V30H1.51758V0Z" fill="#181A93" />
                <path d="M0 0H45V10H0V0Z" fill="#FFA44A" />
                <path d="M0 20H45V30H0V20Z" fill="#1A9F0B" />
                <path d="M0 10H45V20H0V10Z" fill="white" />
                <path
                  d="M22.5 18C24.1569 18 25.5 16.6569 25.5 15C25.5 13.3431 24.1569 12 22.5 12C20.8431 12 19.5 13.3431 19.5 15C19.5 16.6569 20.8431 18 22.5 18Z"
                  fill="white"
                />
                <path
                  d="M22.5 19C20.2982 19 18.5 17.2018 18.5 15C18.5 12.7982 20.2982 11 22.5 11C24.7018 11 26.5 12.7982 26.5 15C26.5 17.2018 24.7018 19 22.5 19ZM22.5 18C24.0965 18 25.5 16.5965 25.5 15C25.5 13.4035 24.1053 12 22.5 12C20.8947 12 19.5 13.4035 19.5 15C19.5 16.5965 20.9035 18 22.5 18Z"
                  fill="#181A93"
                />
                <path
                  d="M22.5 17C23.6046 17 24.5 16.1046 24.5 15C24.5 13.8954 23.6046 13 22.5 13C21.3954 13 20.5 13.8954 20.5 15C20.5 16.1046 21.3954 17 22.5 17Z"
                  fill="#181A93"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="45" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        />
      </div>
    </Container>
  </div>
);

const ContactUsPage: React.FC = () => {
  return (
    <SimpleLayout>
      <Addresses />
    </SimpleLayout>
  );
};

export default ContactUsPage;
