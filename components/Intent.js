import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import React from 'react';
const Intent = ({text}) => {
    return (
        <div className="intent">
            <h2 className="text-xl">{text}</h2>
            <ArrowForwardIosRoundedIcon className="text-gray-700" />
      </div>
    );
};

export default Intent;