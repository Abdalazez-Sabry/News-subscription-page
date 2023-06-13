import NewsLetterForm from "./NewsLetterForm";
import SuccessMessage from "./SuccessMessage";
import { useState } from "react";

const Content = () => {
    const [state, setState] = useState("submitting");
    const [email, setEmail] = useState("");
    const handleStateChange = (newState, newEmail) => {
        setEmail(newEmail)
        setState(newState);
    }
    if(state == "submitting") {
        return (
            <NewsLetterForm setState={handleStateChange} />
        );
    }

    return (
        <SuccessMessage setState={handleStateChange} email={email} />
    );
};

export default Content;