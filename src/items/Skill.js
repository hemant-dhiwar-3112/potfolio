import React, { useState } from "react";
import Skillper from "./Skillper";

const Skill = () => {
  const [showhide1, setshowhide1] = useState("");
  const [showhide2, setshowhide2] = useState("hidden");
  const [showhide3, setshowhide3] = useState("hidden");
  const [showhide4, setshowhide4] = useState("hidden");
  const [title, settitle] = useState("Front End");

  return (
    <>
      <div className="dark:bg-[#0f1013]  bg-[#7b787814]">
        <div className="w-[100%] sm:w-[90%] lg:w-[80%] py-[20px] px-[15px]  lg:mx-[10%] sm:mx-[5%] mx-0 h-[90vh]">
          <h1 className=" my-6 mx-[22vw] sm:mx-[30vw] border-b-2 border-b-[red]  rounded-[10px]">
            <p className=" text-[1.2rem] mx-[5px] px-[5px] uppercase font-bold dark:text-white text-center">
              skill
            </p>
          </h1>
          <div className="sm:flex justify-center py-10">
            <div id='skillbut' className="flex justify-center flex-wrap w-full md:w-[50%] text-white items-center">
              <button
                onClick={() => {
                  settitle("Front End ");
                  setshowhide1("");
                  setshowhide2("hidden");
                  setshowhide3("hidden");
                  setshowhide4("hidden");
                }}
                className="border-transparent cursor-pointer px-10 mx-10 my-2 sm:m-0 md:mr-[15px] py-6 border-2 rounded-3xl bg-slate-600"
              >
                Front End
              </button>
              <button
                onClick={() => {
                  settitle("Back End ");
                  setshowhide1("hidden");
                  setshowhide2("");
                  setshowhide3("hidden");
                  setshowhide4("hidden");
                }}
                className="border-transparent cursor-pointer px-10 py-6 mx-10 my-2 sm:m-0 md:mx-[5px] border-2 rounded-3xl bg-slate-600"
              >
                Back End
              </button>

              <button
                onClick={() => {
                  settitle("Framework & Library");
                  setshowhide1("hidden");
                  setshowhide2("hidden");
                  setshowhide3("");
                  setshowhide4("hidden");
                }}
                className="border-transparent cursor-pointer px-7 mx-10  py-6 my-2 sm:m-0 md:mr-[15px] border-2 rounded-3xl bg-slate-600"
              >
                Framework/Library
              </button>
              <button
                onClick={() => {
                  settitle("Tools");
                  setshowhide1("hidden");
                  setshowhide2("hidden");
                  setshowhide3("hidden");
                  setshowhide4("");
                }}
                className=" border-transparent cursor-pointer px-10 py-6 mx-10 my-2 sm:m-0 md:mx-[5px] border-2 rounded-3xl bg-slate-600"
              >
                Tool
              </button>
            </div>

            <div className=" w-[90%] sm:w-[80%] md:w-[50%] my-5 mx-auto">
              <div className="flex flex-col self-cenetr text-white h-[310px]  rounded-2xl bg-slate-600 ">
                <div className="border-b-2 border-b-[#101d2f] px-6 py-2">
                  <h3 className=" border-r-emerald-400 text-start ">{title}</h3>
                </div>
                <div className={showhide1}>
                  <Skillper
                    name="HTML" per='90%'
                    cash="w-[90%] h-full absolute rounded-3xl bg-emerald-400 after:text-[red] "
                  />
                  <Skillper
                    name="CSS" per='85%'
                    cash="w-[85%] h-full absolute rounded-3xl bg-emerald-400 "
                  />
                  <Skillper
                    name="Javascript" per='80%'
                    cash="w-[80%] h-full absolute rounded-3xl bg-emerald-400 "
                  />
                  <Skillper
                    name="React.js" per='75%'
                    cash="w-[75%] h-full absolute rounded-3xl bg-emerald-400 "
                  />
                </div>
                <div className={showhide2}>
                  <Skillper
                    name="PHP" per='70%'
                    cash="w-[70%] h-full absolute rounded-3xl bg-emerald-400 "
                  />

                </div>
                <div className={showhide3}>
                  <Skillper
                    name="Bootstrap" per='80%'
                    cash="w-[80%] h-full absolute rounded-3xl bg-emerald-400 "
                  />
                  <Skillper
                    name="Taailwind Css" per='75%'
                    cash="w-[75%] h-full absolute rounded-3xl bg-emerald-400 "
                  />
                  <Skillper
                    name="Jqury" per='80%'
                    cash="w-[80%] h-full absolute rounded-3xl bg-emerald-400 "
                  />
                </div>
                <div className={showhide4}>
                  <Skillper
                    name="Git & Github" per='80%'
                    cash="w-[80%] h-full absolute rounded-3xl bg-emerald-400 "
                  />
                  <Skillper
                    name="Visual Studio Code" per='85%'
                    cash="w-[85%] h-full absolute rounded-3xl bg-emerald-400 "
                  />
                  <Skillper
                    name="Responsive Design" per='80%'
                    cash="w-[80%] h-full absolute rounded-3xl bg-emerald-400 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
