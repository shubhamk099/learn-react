import React from "react";

// Every component(function) receives a prop, can use like this or props.key
function Card({ username = "chaiaurcode", btnText = "visit site" }) {
  return (
    <>
      <div className="mb-4 mt-4">
        <a
          className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
          href="#"
        >
          <img
            src="https://loremflickr.com/800/600/girl"
            className="shadow rounded-lg overflow-hidden border"
          />
          <div className="mt-8">
            <h4 className="font-bold text-xl">{username}</h4>
            <p className="mt-2 text-gray-600">
              Create Exercises for any subject with the topics you and your
              students care about.
            </p>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
              >
                {btnText}
              </button>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;

// function Card(props) {
//   props.key - use properties like that or destructure it [name, age]
// }
