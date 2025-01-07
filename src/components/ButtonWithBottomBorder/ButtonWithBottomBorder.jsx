import React from 'react';

const ButtonWithBottomBorder = ({content}) => {
    return (
        <div>
            <button className="btn bg-transparent border-0 border-b-2 border-b-white hover:border-b-yellow-500 uppercase">{content}</button>
        </div>
    );
};

export default ButtonWithBottomBorder;