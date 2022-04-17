import React, { useState, useRef } from "react";
import CustomLogin from "../Login/CustomLogin";
import CustomRegister from "../Register/CustomRegister";


const CustomForm = () => {

    const [isActive, setIsActive] = useState(true);

    const classRegister = useRef();
    const classLogin = useRef();

    const registerHandler = () => {
        classRegister.current.classList.add("active-form-btn");
        classLogin.current.classList.remove("active-form-btn");
        setIsActive(false);
    }

    const loginHandler = () => {
        classLogin.current.classList.add("active-form-btn");
        classRegister.current.classList.remove("active-form-btn");
        setIsActive(true);
    }

    return (
        <>
            <div className="total-form">
                <div className="form-btn">
                    <button ref={classRegister} onClick={registerHandler} className="register-btn">ثبت نام</button>
                    <button ref={classLogin} onClick={loginHandler} className="login-btn active-form-btn">ورود</button>
                </div>
                {
                    isActive ? <CustomLogin /> : <CustomRegister />
                }
            </div>
            
        </>
    )
}
 
export default CustomForm;




