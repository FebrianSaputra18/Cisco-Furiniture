import React from "react";
import { FaStar } from "react-icons/fa6";
import { ava1, ava2, ava3 } from "../assets/images";

const FeedbackCustomers = () => {
  const feedback = [
    {
      id: 1,
      comment: "Our experience with this company has been outstanding.",
      avatar: ava1,
      company: "CEO, XYZ Company",
    },
    {
      id: 2,
      comment:
        "Their products are top-notch and their customer service is exceptional.",
      avatar: ava2,
      company: "CEO, XYZ Company",
    },
    {
      id: 3,
      comment: "I highly recommend this company for all your furniture needs.",
      avatar: ava3,
      company: "CEO, XYZ Company",
    },
  ];
  console.log("feed", feedback);

  return (
    <div className="flex">
      {feedback.map((item) => (
        <div key={item.id} className="w-[400px] font-sans">
          <div className="w-full flex">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <div className="pt-3">{item.comment}</div>
          <div className="pt-9">
            <img
              src={item.avatar}
              alt="avatar"
              className="w-16 h-w-16 rounded-full"
            />
          </div>
          <div className="pt-3 text-gray-400 text-sm">{item.company}</div>

        </div>
      ))}
    </div>
  );
};

export default FeedbackCustomers;
