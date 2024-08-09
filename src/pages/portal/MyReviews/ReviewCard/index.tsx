import { Review } from "@/types/review";
import { Divider, Tag } from "antd";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white hover:scale-105 duration-100 p-5 cursor-pointer">
      <div className="flex justify-between">
        <div className="text-gray-400">Review #1</div>
        <Tag color="success">Submitted </Tag>
      </div>

      <Divider />

      <div>
        <div className="text-xs font-bold py-2">Case ID : {review.caseID}</div>
        <div className="text-xs font-bold py-2">
          Customer ID : {review.customerId}
        </div>
        <div className="text-xs font-bold py-2">
          Patient Name : {review.patientName}
        </div>
        <div className="text-xs font-bold py-2">Gender : {review.gender}</div>
        <div className="text-xs font-bold py-2">DOB : {review.dob}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
