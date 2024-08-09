import HomePage from "@/pages/Home";
import { lazy, Suspense } from "react";
import FullpageLoader from "./components/FullpageLoader";
import { RouteObject } from "react-router-dom";
import MyReviewsPage from "./pages/portal/MyReviews";
import ProfilePage from "./pages/portal/Profile";
import AboutUsPage from "./pages/AboutUs";

const LoginPage = lazy(() => import("@/pages/portal/Login"));
const SignUpPage = lazy(() => import("@/pages/portal/SignUp"));
const ContactUsPage = lazy(() => import("@/pages/ContactUs"));
const CreateReviewPage = lazy(() => import("@/pages/portal/CreateReview"));

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<FullpageLoader />}>
        <ContactUsPage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<FullpageLoader />}>
        <AboutUsPage />
      </Suspense>
    ),
  },
  {
    path: "/portal",
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<FullpageLoader />}>
            <MyReviewsPage />
          </Suspense>
        ),
      },
      {
        path: "/portal/login",
        element: (
          <Suspense fallback={<FullpageLoader />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/portal/signup",
        element: (
          <Suspense fallback={<FullpageLoader />}>
            <SignUpPage />
          </Suspense>
        ),
      },
      {
        path: "/portal/reviews",
        element: (
          <Suspense fallback={<FullpageLoader />}>
            <MyReviewsPage />
          </Suspense>
        ),
      },
      {
        path: "/portal/profile",
        element: (
          <Suspense fallback={<FullpageLoader />}>
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: "/portal/reviews/new",
        element: (
          <Suspense fallback={<FullpageLoader />}>
            <CreateReviewPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default appRoutes;
