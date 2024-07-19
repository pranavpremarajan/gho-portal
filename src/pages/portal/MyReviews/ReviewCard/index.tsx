import { Review } from "@/types/review";
import { Tag } from "antd";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white p-4 shadow cursor-pointer">
      <div>Review #1</div>

      <div className="text-md font-bold">
        {review.firstname} {review.lastname}
      </div>
      <p>Lorem ipsum doler sit amet</p>
      <Tag color="gold">{review.status}</Tag>
      <div>25 Male</div>
    </div>
  );
};

export default ReviewCard;
