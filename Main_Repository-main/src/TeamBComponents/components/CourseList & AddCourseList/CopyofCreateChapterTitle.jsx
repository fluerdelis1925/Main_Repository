//february 2 2024 creation of this page and UI -gem
//february 3 modification of ui and functionalities -gem

import { useContext, useState } from "react";
import axios from "axios";

//import course context
// import { ChapterContext } from "../context/ChapterContext";

const CopyofCreateChapterTitle = () => {
  //state for handling course data
  const [chapter, setChapter] = useState({
    // chapter_id: "",
    chapter_title: "",
  });

  // Add a state variable to track whether the form is submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  //get showcreatecourse hook in coursecontext
  // const { showCreateChapter, setShowCreateChapter } = useContext(ChapterContext);

  //destructu course
  const { chapter_title } = chapter;

  const handleInputChange = (e) => {
    setChapter({ ...chapter, [e.target.name]: e.target.value });
  };

  // const handleInputChange = (e, /*chapterIndex*/) => {
  //   const { name, value } = e.target;

  //   // let capitalizedValue = value;

  //   // if (name.startsWith("chapter_title")) {
  //   //   const updatedChap = [...chap];
  //   //   updatedChap[chapterIndex] = {
  //   //     ...updatedChap[chapterIndex],
  //   //     chapter_title: value.charAt(0).toUpperCase() + value.slice(1),
  //   //   };
  //   //   setChapter((prevChapter) => ({
  //   //     ...prevChapter,
  //   //     chapters: updatedChap,
  //   //   }));
  //   // } else {
  //   //   capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
  //   //   setChapter((prevChapter) => ({
  //   //     ...prevChapter,
  //   //     [name]: capitalizedValue,
  //   //   }));
  //   // }
  // };

  const handleSubmit = async (e) => {
    console.log("Form submitted:", chapter);

    // Assuming your API call is successful, update the state to indicate form submission
    try {
      await axios.post("http://localhost:8080/api/courses", chapter);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error if the API call fails
    }
  };
  console.log(chapter);
  //react hook for tooltip
  const [showTooltipChapterTitle, setShowTooltipChapterTitle] = useState(false);

  return (
    <>
      <div className="fixed top-16 left-20 pt-20 pl-10 w-full h-full backdrop-blur-[.1rem] ">
        <div className="w-[100%] h-[100vh] pb-50 ">
          <div className="lg:w-[1080px] ">
            {!formSubmitted && (
              <div className="flex \ border-[.01rem] drop-shadow-2xl shadow-lg border-black rounded-lg m-auto bg-[#EBFFE5] lg:max-w-[550px] 2xl:max-h-[672px] 2xl:max-w-[724px] ">
                <form onSubmit={handleSubmit} className="w-[80%] m-auto py-2 ">
                  <div className="flex items-center py-1 text-black lg:font-bold lg:text-3xl lg:py-0">
                    <p className=" lg:font-bold TeamB_text-shadow   text-[24px] pb-2">
                      Add New Chapter
                    </p>
                  </div>
                  <div className="relative w-full ">
                    {/* CHAPTER TITLE INPUT */}

                    <input
                      maxLength={70}
                      required={false}
                      type="text"
                      className="bg-[#BCE8B1] placeholder-[#070101] shadow-lg placeholder:TeamB_text-shadow   placeholder:xl:text-[24px] rounded-lg opacity-50 w-full py-3 pl-2 box-border"
                      placeholder="Chapter Title"
                      name="chapter_title"
                      value={chapter_title}
                      onChange={(e) => handleInputChange(e)}
                      onMouseOver={() => setShowTooltipChapterTitle(true)}
                      onMouseLeave={() => setShowTooltipChapterTitle(false)}
                    />
                    {showTooltipChapterTitle && (
                      <div className="absolute top-[-3.5rem] right-0 bg-[#fff]  w-[50%] p-1 rounded-lg border-[1px] border-[#126912]">
                        <p className="text-[.8rem] text-[#4D4141] text-opacity-[53%]">
                          Maximum of 70 alphanumeric and special characters.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-8 lg:w-full lg:flex lg:justify-end">
                    <div className="flex gap-x-5">
                      <button
                        className="xl:text-[24px]  lg:text-[1rem]"
                        onClick={() => setShowCreateChapter((prev) => !prev)}>
                        Cancel
                      </button>

                      <button
                        className="drop-shadow-md TeamB_text-shadow   lg:w-[90px] lg:h-[40px] lg:rounded-[80px] lg:text-[1rem] xl:w-[114px] xl:h-[58px] xl:rounded-[100px] bg-[#126912] xl:text-[24px] text-[#FFFFFF]  font-bold"
                        type="submit"
                        onClick={() => setShowCreateChapter((prev) => !prev)}>
                        <p>Create</p>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyofCreateChapterTitle;
//february 2 2024 creation of this page and UI -gem
//february 3 modification of ui and functionalities -gem
