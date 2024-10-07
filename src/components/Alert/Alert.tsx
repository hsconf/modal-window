import * as React from "react";
import {CSSTransition} from "react-transition-group";

interface Props {
    type: string;
    isOpen: boolean;
    onDismiss?: () => void;
    children: React.ReactNode;
}

const Alert: React.FC<Props> = ({type, isOpen, onDismiss, children}) => {
    return (
        <CSSTransition timeout={300}>
            <div
                className={"position-fixed p-2 rounded shadow d-flex justify-content-between " + `bg-${type} ${isOpen ? 'd-block' : 'd-none'}`}
                style={{right: 5}}>
                {children}
                {onDismiss ? <button className="btn-close ms-3" onClick={onDismiss}></button> : null}
            </div>
        </CSSTransition>


    );
};

export default Alert;