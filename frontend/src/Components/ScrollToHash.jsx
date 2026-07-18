import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToHash = () => {

    const { hash } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        if(hash) {

            const element = document.querySelector(hash);

            if(element) {

                setTimeout(() => {

                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    // remove hash from URL after scrolling
                    navigate("/", { replace: true });

                }, 100);

            }

        }

    }, [hash, navigate]);


    return null;
}

export default ScrollToHash;