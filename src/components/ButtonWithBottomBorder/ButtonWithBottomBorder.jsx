import React from 'react';

const ButtonWithBottomBorder = ({content}) => {
    return (
        <div>
            <button className="btn border-t-0 border-l-0 border-r-0 border-b-2 border-white hover:border-b-yellow-500 uppercase">{content}</button>
        </div>
    );
};

export default ButtonWithBottomBorder;