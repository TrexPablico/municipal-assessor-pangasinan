import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const resources = {
  1: {
    title: "Tax Mapping Activities",
    title2:
      "Tax Mapping Activities, collaborative efforts by & beyween NIA Region 1 &  Assessor Aguilar",
    title3: "Discover more by watching this video.",
    description2: "",
    description: "",

    //video: "../assets/ResourceDetails/video1.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F412133091407708%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "Things to know about Tax mapping",
    id: 1,
    question: "What is the purpose of taxmapping?",
    question2: "Other purposes of tax mapping?",
    answer: "It helps identification of affected lots",
    answer2: "Identification of lot owners & Submition of documents",
  },
  2: {
    title: "Monthly Meeting",
    title2: "Monthly Meeting",
    title3: "Check out the video for more information.",
    description2:
      "Venngage is an online platform that allows users to create infographics, presentations, reports, and other visual content easily. It's designed to be user-friendly, with a wide range of templates, icons, charts, and design tools that help users create professional-looking visuals without needing advanced design skills. Venngage is popular among marketers, educators, and business professionals who want to communicate information in a visually engaging way.",
    description:
      "Learn how to create stunning infographics, presentations, and reports with ease.",
    //cover: image2,
    //video: "../assets/ResourceDetails/video2.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F352991677625425%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "FAQs",
    id: 2,
    question: "",
    question2: "",
    answer: "",
    answer2: "",
  },
  3: {
    title: "Tax Mapping Activity",
    title2: "What is Stencil?",
    title3: "Watch the video to learn more",
    description2:
      "Stencil is an online graphic design tool that allows users to create images and graphics quickly and easily, particularly for social media, blogs, and marketing purposes. It is designed to be user-friendly and accessible, making it ideal for people who may not have extensive design experience.",
    description:
      "A fantastically easy-to-use online graphic design tool and image editor built for business owners, social media marketers, and bloggers.",
    //cover: image3,
    //video: "../assets/ResourceDetails/video3.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F730772052272971%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "FAQs",
    question: "",
    question2: "",
    answer: "",
    answer2: "",
  },
  4: {
    title: "Right of Way",
    title2: "Right of Way",
    description2:
      "Creatopy is a design automation platform that helps users create and manage various types of visual content, such as ads, banners, and social media graphics. It offers tools for designing, personalizing, and optimizing creative assets, often integrating features like drag-and-drop editing, template libraries, and collaboration options. It aims to streamline the design process, making it easier for individuals and teams to produce high-quality visual content efficiently.",
    description:
      "Creatopy is an intuitive design platform that simplifies creating engaging ads, social media visuals, and marketing materials.",
    //cover: image4,
    //video: "../assets/ResourceDetails/video4.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F1255163442004255%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "FAQs",
    question: "",
    question2: "",
    answer: "",
    answer2: "",
  },
  5: {
    title: "Article 313 Revised Penal Code",
    title2: "Article 313 Revised Penal Code",
    description2:
      "Visme is a versatile online design tool used for creating a wide range of visual content, including presentations, infographics, reports, social media graphics, and more. It offers a user-friendly interface with drag-and-drop functionality, pre-designed templates, and a variety of design elements such as icons, charts, and images. Visme also includes features for data visualization, interactive content, and collaboration, making it a popular choice for individuals and teams looking to create professional and engaging visual content.",
    description:
      "Visme is a versatile design tool that lets you create stunning presentations, infographics, and marketing materials effortlessly.",
    //cover: image5,
    //video: "../assets/ResourceDetails/video5.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F1168225104074226%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "FAQs",
    question: "",
    question2: "",
    answer: "",
    answer2: "",
  },
  6: {
    title: "Adverse Claim",
    title2: "Adverse Claim",
    description2:
      "Ceros is a content creation platform designed to help users build interactive and engaging digital experiences, such as presentations, infographics, and marketing content. It provides a range of tools for designing dynamic and visually appealing content without needing extensive coding knowledge. Ceros focuses on creating interactive elements like animations, clickable areas, and embedded media to enhance user engagement. It's often used by marketing teams and designers to create content that stands out and captures audience attention.",
    description:
      "A content creation platform that empowers marketers and designers to create engaging, interactive, and immersive content experiences.",
    //cover: image6,
    //video: "../assets/ResourceDetails/video6.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F837467347627032%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "FAQs",
    question: "",
    question2: "",
    answer: "",
    answer2: "",
  },
  7: {
    title: "Karagdagang mga Kinakailangan",
    title2: "Karagdagang mga Kinakailangan",
    description2:
      "Foleon is a content creation platform that allows users to create interactive and visually rich digital publications, such as brochures, reports, magazines, and newsletters. It provides a drag-and-drop editor, customizable templates, and tools for incorporating multimedia elements like videos, animations, and interactive features. Foleon is designed to help businesses and organizations produce engaging content that can be easily shared and viewed across devices. It's often used for creating content that combines the narrative power of traditional print media with the interactivity and analytics of digital media.",
    description:
      "Foleon is a content creation platform for designing interactive and visually engaging digital publications with an easy-to-use drag-and-drop editor and customizable templates.",
    //cover: image7,
    //video: "../assets/ResourceDetails/video7.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F791545908534276%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener:
      "Cool Stuff You Should Know About Foleon: Making Awesome Digital Projects Fun and Easy!",
    question: "Do I need to know coding to use Foleon?",
    question2: "Can I work on Foleon projects with my friends?",
    answer:
      "Nope! With Foleon, you don’t need to know any coding at all. It’s like a digital craft box where you just drag and drop what you want, making it easy and fun to design awesome projects.",
    answer2:
      "Yes, you can! Foleon makes it easy to team up with your friends on projects. You can all work together online, adding your own ideas to create something amazing as a group.",
  },
  8: {
    title: "Typhoon Florita",
    title2: "Typhoon Florita",
    description2:
      "WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites and blogs easily. It offers a flexible platform for building a wide range of websites, from simple blogs to complex e-commerce sites, without requiring extensive coding knowledge.",
    description:
      "WordPress is a popular content management system that allows users to create and manage websites and blogs with ease.",
    //cover: image8,
    //video: "../assets/ResourceDetails/video8.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F641181407426254%2F&show_text=false&width=476&t=0" width="476" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "FAQs",
    question: "",
    question2: "",
    answer: "",
    answer2: "",
  },
  9: {
    title: "Formulation of the Executive-Legislative Agenda",
    title2: "Formulation of the Executive-Legislative Agenda",
    description2:
      "Emplifi is a customer experience platform that provides tools and solutions for businesses to manage and improve their interactions with customers across various digital channels. It combines social media management, customer care, and data analytics to help companies engage with their audiences, deliver better customer service, and make data-driven decisions.",
    description:
      "A digital tool that allows you to easily manage all the profiles you have on social networks in a clear and simple way.",
    //cover: image9,
    //video: "../assets/ResourceDetails/video9.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F1235872950577235%2F&show_text=false&width=560&t=0" width="560" height="317" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "FAQs",
    question: "",
    question2: "",
    answer: "",
    answer2: "",
  },
  10: {
    title: "Mga Dapat Gawin Kapag Bibili ng Lupa",
    title2: "Mga Dapat Gawin Kapag Bibili ng Lupa",
    description2:
      "Microsoft Teams is a collaboration and communication platform developed by Microsoft, designed to facilitate teamwork in organizations. It offers a range of tools and features to help teams collaborate effectively, whether they are working in the same office or remotely.",
    description:
      "A collaboration platform that integrates chat, video meetings, and file sharing to streamline team communication and productivity.",
    //cover: image10,
    //video: "../assets/ResourceDetails/video10.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F675192316979809%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "FAQ",
    question: "",
    question2: "",
    answer: "",
    answer2: "",
  },
  11: {
    title: "The Ultimate List of Breakfast Faves",
    title2: "The Ultimate List of Breakfast Faves",
    description2:
      "Google Classroom is a free online learning management system (LMS) developed by Google, designed to help teachers create, distribute, and manage assignments, and communicate with students. It is part of Google's suite of tools for education, and it integrates seamlessly with other Google services like Google Drive, Docs, Sheets, and Slides.",
    description:
      "Google Classroom is an educational platform that simplifies assignment management, communication, and collaboration between teachers and students.",
    //cover: image11,
    //video: "../assets/ResourceDetails/video11.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F732283064729112%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "FAQs",
    question: "",
    question2: "",
    answer: "",
    answer2: "",
  },
};

const ResourceDetail = () => {
  const { id } = useParams();
  const resource = resources[id] || {
    title: "Not Found",
    description: "Resource not found.",
    video: "",
    cover: "",
  };

  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // para nasa taas pag click ng kwan
  }, []);

  return (
    <div className="mt-9">
      <h1 className="text-2xl font-bold mb-4 mt-4 pt-4 text-center">
        {resource.title2}
      </h1>
      {/* tanggal muna neto
      <div className="flex flex-col md:flex-row mt-20 px-10 mx-7 gap-y-8">
        <div className="md:w-1/2 w-full flex items-center justify-center">
          {resource.cover && (
            <img
              src={resource.cover}
              alt={resource.title}
              className="w-full h-auto object-cover"
            />
          )}
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <p className="text-center font-semibold mx-4 md:mx-9">
            {resource.description2}
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-4 pt-4 text-center">
        {resource.title3}
      </h1>
      <div className="player-wrapper mx-4 mt-20 flex object-center justify-center">
        <video controls width="700px">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div> */}
      <div
        dangerouslySetInnerHTML={{ __html: resource.embedCode }}
        className="player-wrapper mx-4 mt-20 flex object-center justify-center"
      />

      <div className="w-89% m-auto max-w-[1400px] bg-gray-400 p-8 rounded-lg shadow-md mt-40 mb-11">
        <h2 className="2xl mb-6 font-semibold">{resource.opener}</h2>
        <div className="mb-4 last:mb-0">
          <button
            className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
            onClick={() =>
              setActiveQuestion(
                activeQuestion === `question1-${resource.id}`
                  ? null
                  : `question1-${resource.id}`
              )
            }
          >
            {resource.question}
            {activeQuestion === `question1-${resource.id}` ? (
              <FaMinusCircle />
            ) : (
              <FaPlusCircle />
            )}
          </button>
          <AnimatePresence>
            {activeQuestion === `question1-${resource.id}` && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-600"
              >
                <p>{resource.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center mt-4"
            onClick={() =>
              setActiveQuestion(
                activeQuestion === `question2-${resource.id}`
                  ? null
                  : `question2-${resource.id}`
              )
            }
          >
            {resource.question2}
            {activeQuestion === `question2-${resource.id}` ? (
              <FaMinusCircle />
            ) : (
              <FaPlusCircle />
            )}
          </button>
          <AnimatePresence>
            {activeQuestion === `question2-${resource.id}` && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-600"
              >
                <p>{resource.answer2}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;
