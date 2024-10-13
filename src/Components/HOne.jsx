import React from "react";
import { FaRegStar } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { FaFlag, FaCalendar } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaTags } from "react-icons/fa6";

const data = [
  {
    title: "Microsoft Fabric and AI Learning Hackathon",
    Time: "1 Month",
    mode: "Online",
    prize: "10,000",
    participants: 319,
    company: "Microsoft",
    companyUrl: "",
    startDate: "Sep 24",
    endDate: "Nov 13",
    managedBy: "Devpost",
    Topic: ["Web app", "AI", "ML"],
  },
  {
    title: "Google Cloud Developer Challenge",
    Time: "2 Weeks",
    mode: "Online",
    prize: "15,000",
    participants: 450,
    company: "Google",
    companyUrl: "",
    startDate: "Oct 10",
    endDate: "Oct 24",
    managedBy: "Hackerrank",
    Topic: ["Cloud Computing", "Kubernetes", "DevOps"],
  },
  {
    title: "Meta AR/VR Development Sprint",
    Time: "3 Weeks",
    mode: "Hybrid",
    prize: "20,000",
    participants: 210,
    company: "Meta",
    companyUrl: "",
    startDate: "Nov 01",
    endDate: "Nov 21",
    managedBy: "ChallengeRocket",
    Topic: ["AR", "VR", "3D Modeling"],
  },
  {
    title: "AWS Machine Learning Championship",
    Time: "1 Month",
    mode: "Online",
    prize: "25,000",
    participants: 500,
    company: "Amazon",
    companyUrl: "",
    startDate: "Nov 15",
    endDate: "Dec 15",
    managedBy: "Kaggle",
    Topic: ["Machine Learning", "Data Science", "Cloud"],
  },
];

const HOne = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-3xl">Upcoming Hackathons</p>

          {data.map((hackathon, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 rounded-md bg-white shadow-md p-4 mb-4"
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-5">
                  <img src="ms.png" className="h-32" alt={hackathon.company} />
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold">{hackathon.title}</p>

                    <div className="flex flex-row gap-12">
                      <p className="p-1 pl-3 pr-3 text-sm text-white rounded-full bg-[#1d9c91]">
                        about <span>{hackathon.Time} left</span>
                      </p>
                      <p>{hackathon.mode}</p>
                    </div>
                    <div className="flex flex-row gap-12">
                      <p>
                        <span className="font-bold">₹{hackathon.prize} </span>
                        <span className="text-black/60"> in prizes</span>
                      </p>
                      <p>
                        <span className="font-bold">
                          {hackathon.participants}
                        </span>{" "}
                        <span className="text-black/60">Participants</span>
                      </p>
                    </div>

                    {/* Render Topics */}
                  </div>
                </div>

                <div className="flex flex-col w-[250px] gap-5 items-start mr-5 text-base">
                  <div className="flex flex-row gap-2 items-center">
                    <FaFlag className="text-gray-500" />
                    <p className="p-1 text-blue-500 text-xs border border-1 pl-3 hover:bg-blue-500 hover:text-white hover:cursor-pointer pr-3 rounded-full border-blue-500">
                      {hackathon.company}
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <FaCalendar className="text-gray-500" />
                    <p>
                      <span>{hackathon.startDate}</span> -{" "}
                      <span>{hackathon.endDate}</span>, 2024
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <MdManageAccounts size={25} className="text-gray-500" />
                    <p className="text-blue-500">
                      Managed by {hackathon.managedBy}
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 items-start">
                    <FaTags className="text-gray-500" />

                    <div className="flex flex-wrap  gap-2 ">
                      {hackathon.Topic.map((topic, idx) => (
                        <span
                          key={idx}
                          className="p-1 pl-3 pr-3 text-sm leading-tight text-blue-500 bg-blue-500/20"
                          style={{ flex: "0 0 30%" }} // Ensure two topics per line
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HOne;
