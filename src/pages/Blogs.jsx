import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import cover1 from "../assets/Resources/Capture1.JPG";
import cover2 from "../assets/Resources/Capture2.JPG";
import cover3 from "../assets/Resources/Capture3.JPG";
import cover4 from "../assets/Resources/Capture4.JPG";
import cover5 from "../assets/Resources/Capture5.JPG";
import cover6 from "../assets/Resources/Capture6.JPG";
import cover7 from "../assets/Resources/Capture7.JPG";
import cover8 from "../assets/Resources/Capture8.JPG";
import cover9 from "../assets/Resources/Capture9.JPG";
import cover10 from "../assets/Resources/Capture10.JPG";
import cover11 from "../assets/Resources/Capture11.JPG";
import cover12 from "../assets/Resources/Capture12.JPG";
import cover13 from "../assets/Resources/Capture13.JPG";
import cover14 from "../assets/Resources/Capture14.JPG";
import cover15 from "../assets/Resources/Capture15.JPG";
import cover16 from "../assets/Resources/Capture16.JPG";
import cover17 from "../assets/Resources/Capture17.JPG";
import cover18 from "../assets/Resources/Capture18.JPG";
import cover19 from "../assets/Resources/Capture19.JPG";

const Blogs = () => {
  const navigate = useNavigate();

  const resource = [
    {
      id: 1,
      cover: cover1,
      title: "Tax Mapping Activities 2023-2024",
      description:
        "Collaborative efforts by & between NIA Region 1 and Assessor Aguilar",
      date: "March 20, 2024",
    },
    {
      id: 2,
      cover: cover2,
      title: "Monthly Meeting",
      description:
        "DILG Aguilar field office, MLGOO Norberto L. Macaraeg Jr. & 16 Barangay Secretaries",
      date: "February 9, 2024",
    },
    {
      id: 3,
      cover: cover3,
      title: "Tax Mapping Activity",
      description:
        "Office of the Municipal Assessor Tax Mapping Activity (Nov 30 - Dec 7)",
      date: "December 11, 2023",
    },
    {
      id: 4,
      cover: cover4,
      title: "Right Of Way",
      description:
        "Isa sa pinaka interesanting paksa ukol sa lupa ay ang RIGHT OF WAY. Sa ipapakitang AVP ay malalaman ang piling detalye na makakatulong sa pag-intindi ng probisyon na nakasaad sa batas.",
      date: "October 21, 2022",
    },
    {
      id: 5,
      cover: cover5,
      title: "May kaparusahan ba sa paglilipat o pagbabago ng 'MOHON'?",
      description:
        "Isa pong 'criminal case' ang nag aantay para sa mga walang-pakundangang naglilipat o sadyang binabago ang nakatatag na mga 'mojon'",
      date: "September 27, 2022",
    },
    {
      id: 6,
      cover: cover6,
      title: "Ano ang ADVERSE CLAIM?",
      description:
        "Lahat ng pagpapatatak ng ENCUMBRANCES gaya ng Adverse Claim, Precautionary Notice, tax liens, mortgages etc., ay sa Provincial Assessor’s Office at Register of Deeds muna ito gawin Pagkatapos ng mga nasabing tanggapan ay tsaka susunod ang Municipal Assessor’s Office",
      date: "September 23, 2022",
    },
    {
      id: 7,
      cover: cover7,
      title: "Karagdagang mga kinakailangan",
      description:
        "Mga bagong dokumentos na kelangan isumite bago mailipat ang lupa sa bagong nagmamay-ari ay naisasalamin sa maiksing pagtatanghal na kalakip nito.",
      date: "August 27, 2022",
    },
    {
      id: 8,
      cover: cover8,
      title: "Typhoon Florita",
      description:
        "Sa panahon ni Typhoon Florita, ang lokal na pamahalaan ng Aguilar ay patuloy na nanilbihan.",
      date: "August 25, 2022",
    },
    {
      id: 9,
      cover: cover9,
      title:
        "Municipal Newly Elected Officials (MNEO): Creating roadmap for LGU development.",
      description:
        "MNEO - a continuing capacity development program of the DILG that aims to prepare newly-elected officials of the local government in taking up their tasks and responsibilities as political leaders and area development managers thus to translate their vision and agenda for their LGUs into a feasible plan making their LGUs a globally and regionally competitive institutions.",
      date: "August 7, 2022",
    },
    {
      id: 10,
      cover: cover10,
      title: "Mga Dapat Gawin pag Bibili ng Lupa",
      description:
        "Basic tips in buying a piece of land. Talakayin ang Capital Gains Tax (CGT)",
      date: "August 1, 2022",
    },
    {
      id: 11,
      cover: cover11,
      title: "Google Classroom",
      description:
        "Google Classroom is an educational platform that simplifies assignment management, communication, and collaboration between teachers and students.",
      date: "July 30, 2022",
    },
    {
      id: 12,
      cover: cover12,
      title: "How to correct clerical errors in tax declaration",
      description:
        "Sometimes, an outright denial of an application is all one needs so as to realize the folly of one’s actions.",
      date: "July 24, 2022",
    },
    {
      id: 13,
      cover: cover13,
      title: "Understanding Encumbrances",
      description:
        "Explaining the different types of encumbrances and how they affect property ownership and transactions.",
      date: "July 15, 2022",
    },
    {
      id: 14,
      cover: cover14,
      title: "Real Property Tax Payment Guidelines",
      description:
        "Step-by-step guide on how to properly pay real property taxes in your locality.",
      date: "July 10, 2022",
    },
    {
      id: 15,
      cover: cover15,
      title: "Title Transfer Process",
      description:
        "An overview of the title transfer process and its required documents.",
      date: "July 5, 2022",
    },
    {
      id: 16,
      cover: cover16,
      title: "Common Land Disputes and Their Resolutions",
      description:
        "Insights into common land disputes and how to address them legally.",
      date: "June 30, 2022",
    },
    {
      id: 17,
      cover: cover17,
      title: "Municipal Land Survey Updates",
      description:
        "Updates on ongoing and completed land surveys within the municipality.",
      date: "June 25, 2022",
    },
    {
      id: 18,
      cover: cover18,
      title: "Land Registration Simplified",
      description:
        "Breaking down the land registration process for new landowners.",
      date: "June 20, 2022",
    },
    {
      id: 19,
      cover: cover19,
      title: "How to correct clerical errors in tax declaration",
      description:
        "Sometimes, an outright denial of an application is all one needs so as to realize the folly of one’s actions.",
      date: "July 24, 2022",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/resource/${id}`);
  };

  return (
    <section className="py-16 bg-slate-200 md:mt-1 lg:mt-0 mt-0">
      <div className="w-4/5 m-auto">
        <div className="mb-16">
          <h1 className="text-3xl font-semibold font-Quicksand">News/Blogs</h1>
          <span className="text-sm mt-2 block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resource.map((item) => (
            <div
              key={item.id}
              className="box rounded-lg shadow-shadow1 bg-white cursor-pointer"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="images rounded-t-lg relative overflow-hidden h-50 w-full">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="rounded-t-lg object-cover w-full h-full"
                />
              </div>
              <div className="text p-3 bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaBook />
                    <span className="text-[14px] ml-2">
                      Reading/Video Lessons
                    </span>
                  </div>
                </div>
                <h3 className="text-black my-4 font-bold">{item.title}</h3>
                <h4 className="text-gray-700 my-4 font-semibold">
                  {item.description}
                </h4>
                <h5 className="text-end font-extralight">{item.date}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
