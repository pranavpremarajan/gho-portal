import DashboardLayout from "@/layouts/DashboardLayout";
import { useGetMyReviewsMutation } from "@/services/review";
import FullpageLoader from "@/components/FullpageLoader";
import { Link } from "react-router-dom";
import config from "@/config";
import { PlusIcon } from "@heroicons/react/24/outline";
import ReviewCard from "./ReviewCard";
import { useEffect } from "react";
import { Review } from "@/types/review";

const MyReviewsPage = () => {
  const [getMyReviews, { isLoading, data }] = useGetMyReviewsMutation();

  useEffect(() => {
    getMyReviews({});
  }, []);

  return (
    <DashboardLayout
      title="My Reviews"
      breadCrumbItems={[]}
      loading={isLoading}
    >
      {/* {
        <div className="flex justify-center py-3">
          There are no reviews created
        </div>
      } */}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        <Link to={config.navigation.createReview}>
          <div className="bg-slate-100 hover:scale-105 duration-100 w-full h-full flex items-center justify-center min-h-[250px]">
            <div>
              <div className="flex justify-center">
                <div className="bg-blue-100 rounded-full p-5 h-20 w-20">
                  <div className="bg-blue-800 rounded-full">
                    <PlusIcon className="text-white" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-3">
                <button className="text-blue-700 text-sm border-2 border-blue-700 p-1 px-3 rounded-full">
                  Create New Review
                </button>
              </div>
            </div>
          </div>
        </Link>

        {(data?.["Data"]?.[0] ?? []).map((review: Review, index: number) => (
          <ReviewCard key={index} reviewNo={index + 1} review={review} />
        ))}
      </div>

      {isLoading && <FullpageLoader />}
    </DashboardLayout>
  );
};

export default MyReviewsPage;
