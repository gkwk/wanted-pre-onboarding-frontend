import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("access_token");
        navigate("")
    },[navigate])

    return (
        <div>
        </div>
    );
};

export default SignOut;