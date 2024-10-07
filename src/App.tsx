import Modal from "./components/Modal/Modal.tsx";
import {useState} from "react";
import Alert from "./components/Alert/Alert.tsx";

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    const btnStyle = [
        {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
        {type: 'danger', label: 'Close', onClick: () => setIsOpen(false)}
    ];

    const [alert, setAlert] = useState(false);

    return <>

        <button onClick={() => setIsOpen(!isOpen)}>Open</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello world!">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste odit quidem vel.</p>
            <div>
                {btnStyle.map((item) => (
                    <button className={`btn btn-${item.type} me-1`} onClick={item.onClick}
                            key={item.type}>{item.label}</button>
                ))}
            </div>
        </ Modal>
        <button onClick={() => setAlert(true)}>Alert</button>
        <Alert type="success" isOpen={true}>
            <p className="m-0 text-light">Lorem ipsu sit sunt? Ea.</p>
        </Alert>
        <Alert type="warning" isOpen={alert} onDismiss={() => setAlert(false)}>
            <p className="m-0 text-light">Lorem ipsu sit sunt? Ea.</p>
        </Alert>
    </>;
};

export default App;
