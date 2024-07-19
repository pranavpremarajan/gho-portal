import envConfig from "./env";

const navigationConfig = {
  home: "/home",
  portal: "/portal",
  login: "/portal/login",
  signup: "/portal/singup",
  reviews: "/portal/reviews",
  profile: "/portal/profile",
  createReview: "/portal/reviews/new",
};

const config = {
  navigation: navigationConfig,
  env: envConfig,
};

export default config;
