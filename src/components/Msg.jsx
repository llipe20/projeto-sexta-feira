import React from "react";

const Messeger = ({msg}) => {
    const classes = "w-auto h-12 rounded-lg p-1 text-black top-4 left-4 bg-white"
    return (
        <div className={classes}>
            {
                msg === 1
            }
        </div>
    )
}

export default Messeger