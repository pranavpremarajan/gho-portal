import { Review } from "@/types/review";
import { Divider, Tag } from "antd";

interface ReviewCardProps {
  reviewNo: number;
  review: Review;
}

const ReviewCard = ({ review, reviewNo }: ReviewCardProps) => {
  return (
    <div className="bg-slate-100 hover:scale-105 duration-100 p-5 cursor-pointer">
      <div className="flex justify-between">
        <div className="text-gray-400">Review {reviewNo}</div>
        <Tag color="success">{review.stn} </Tag>
      </div>

      <Divider />

      <div className="text-xs font-bold py-2">Case ID : {review.id}</div>

      <div>
        <div className="text-xs font-bold py-2">
          Patient Name : {review.fn} {review.ln}
        </div>
        <div className="text-xs font-bold py-2">Gender : {review.sx}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
