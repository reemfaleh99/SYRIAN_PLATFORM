import React, { useState } from "react";

const OptionsList = ({options = [] }) => {
  const [selected, setSelected] = useState(null);

  return (

      <div
        className="flex gap-3"
      >
        {options.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item.value)}
            className={`px-10 py-3 rounded-full  transition hidden xl:block
              ${selected === item.value ? "bg-babyBlue text-white" : "bg-white hover:bg-babyBlue border border-gray-200"}
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
  );
};

export default OptionsList;
