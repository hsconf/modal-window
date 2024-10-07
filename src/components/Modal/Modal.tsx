import * as React from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<Props> = ({isOpen, onClose, title, children}) => {

    return (
        <div className={"w-25 shadow mx-auto mt-5 p-3 rounded border border-gray-300 "+ `${isOpen ? 'd-block' : 'd-none'}`}>
            <div className="d-flex align-items-center justify-content-between border-bottom border-2 pb-2">
                <div style={{fontSize:'20px', fontWeight:'500'}}>{title}</div>
                <button className="btn-close" onClick={onClose}></button>
            </div>
            <div className="mt-2">
                {children}
            </div>
        </div>
    );
};

export default Modal;