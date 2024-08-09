import { Link } from "react-router-dom"
import React  from 'react'

const Homereact = () => {
    return (
        <>
            <div className="dark:bg-[#0f1013]  bg-[#7b787814]">
                <div className="w-[100%] sm:w-[90%] lg:w-[80%] py-[50px] px-[15px]  lg:mx-[10%] sm:mx-[5%] mx-0 h-[50%]">
                    <h1 className=" my-6 mx-[22vw] sm:mx-[30vw] border-b-2 border-b-[red] rounded-[10px]">
                        <p className=" text-[1.2rem] mx-[5px] px-[5px] uppercase font-bold dark:text-white text-center">
                        react projects
                        </p>
                    </h1>
                    <div className="flex flex-wrap justify-center items-center py-10">
                        <div
                            className="w-[95%] sm:w-[60%] md:w-[40%] lg:w-[30%] mx-2 md:mx-4  bg-[#61575742] py-8 my-10 px-5 rounded-3xl"
                            style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
                        >
                            <h2 className="uppercase text-center text-[16px] font-bold my-3 dark:text-[#64FFDA]">
                               password generater 
                                <samp className="m-0  rounded-3xl px-1 py-[2px] mx-1  border-2 border-[green] text-[green]">
                                    live
                                </samp>
                            </h2>
                            <div className=" text-sm font-medium m-3 flex flex-wrap dark:text-[#64FFDA]">
                                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">REACT</p>
                                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">TAILWIND</p>
                            </div>
                            <p className="dark:text-[#868e96] px-2 m-2 text-justify">
                                In this, there are small projects of all React js which I have
                                made while practices, due to which my React has become stronger.
                            </p>
                            <div className="px-2 m-4 flex justify-center">
                                <Link
                                    to="Password-generater"
                                    className="  dark:text-[#64FFDA]  text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                                >
                                    preview
                                </Link>
                            </div>
                        </div>
                        <div
                            className="w-[95%] sm:w-[60%] md:w-[40%] lg:w-[30%] mx-2 md:mx-4  bg-[#61575742] py-8 my-10 px-5 rounded-3xl"
                            style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
                        >
                            <h2 className="uppercase text-center text-[16px] font-bold my-3 dark:text-[#64FFDA]">
                               Currency converter 
                                <samp className="m-0  rounded-3xl px-1 py-[2px] mx-1  border-2 border-[green] text-[green]">
                                    live
                                </samp>
                            </h2>
                            <div className=" text-sm font-medium m-3 flex flex-wrap dark:text-[#64FFDA]">
                                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">REACT</p>
                                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">TAILWIND</p>
                            </div>
                            <p className="dark:text-[#868e96] px-2 m-2 text-justify">
                                In this, there are small projects of all React js which I have
                                made while practices, due to which my React has become stronger.
                            </p>
                            <div className="px-2 m-4 flex justify-center">
                                <Link
                                    to="Currency-converter"
                                    className="  dark:text-[#64FFDA]  text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                                >
                                    preview
                                </Link>
                            </div>
                        </div>
                          
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homereact
