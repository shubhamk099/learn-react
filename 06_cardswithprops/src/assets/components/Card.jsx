import React from "react";

function Card({ cardData }) {
  return (
    <>
      <div className="mt-6">
        <div className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
          <img
            className="m-1.5 h-max w-[calc(100%-12px)] rounded-[5px]"
            src={cardData.img}
            alt="image"
          />
          <div className="h-max w-full rounded px-3 py-2">
            <h6 className="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
              UI/UX Review Check
            </h6>
            <p className="my-1 font-sans text-base text-slate-600 antialiased">
              {cardData.text}
            </p>
          </div>
          <div className="w-full rounded px-3 pb-3 pt-1.5">
            <button className="inline-flex rounded-md border border-slate-800 bg-slate-800 px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
              <a href={cardData.link}>Read More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
