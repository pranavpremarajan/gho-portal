import DashboardLayout from "@/layouts/DashboardLayout";
import { useGetMyReviewsQuery } from "@/services/review";
import ReviewCard from "./ReviewCard";
import NoReviewsFound from "./NoReviewsFound";
import ErrorLoadingData from "./ErrorLoadingData";
import { Review } from "@/types/review";
import FullpageLoader from "@/components/FullpageLoader";
import { Link } from "react-router-dom";
import config from "@/config";
import { PlusIcon } from "@heroicons/react/24/outline";

const MyReviewsPage = () => {
  const { data, isLoading, isError, isSuccess } = useGetMyReviewsQuery({});
  return (
    <DashboardLayout
      title="My Reviews"
      breadCrumbItems={[]}
      loading={isLoading}
    >
      <div className="flex justify-end">
        <Link to={config.navigation.createReview}>
          <button className="bg-primary text-white p-2 my-2 flex items-center">
            <PlusIcon className="h-5"/> Create Review
          </button>
        </Link>
      </div>
      {isSuccess && data?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data?.map((review: Review) => (
            <ReviewCard review={review} />
          ))}
        </div>
      )}

      {isSuccess && data?.length == 0 && <NoReviewsFound />}
      {isError && <ErrorLoadingData />}
      {isLoading && <FullpageLoader />}
    </DashboardLayout>
  );
};

export default MyReviewsPage;
