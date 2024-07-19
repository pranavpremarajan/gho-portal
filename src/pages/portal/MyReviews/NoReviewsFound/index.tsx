import FormButton from "@/components/FormButton";

const NoReviewsFound = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div>No Reviews Found</div>
        <div>Create a review andit will appear here</div>
        <FormButton>Create Review</FormButton>
      </div>
    </div>
  );
};

export default NoReviewsFound;
