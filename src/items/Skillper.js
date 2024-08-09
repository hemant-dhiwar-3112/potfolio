import React from "react";

const Skillper = (props) => {
  return (
    <>
      
          <div className="my-[10px] px-6 py-2">
            <div className="mt-0 mb-2 flex justify-between">
              <samp>{props.name}</samp>
              <samp>{props.per}</samp>
            </div>
            <div id='progess' className="mb-0 relative w-full rounded-3xl h-1 bg-black ">
              <samp id="progess-samp" className={props.cash}></samp>
            </div>
          </div>
          
    </>
  );
};

export default Skillper;
