import React, { useState } from "react";
import "../styles/customformstyle.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useFormik } from "formik";
import axios from "axios";

const CustomLogin = (props) => {

    const [isLoggin, setIsLoggin] = useState("");
    let loggin = ""

    const formikLogin = useFormik({
        initialValues : {
            "email" : "",
            "password" : ""
        },
        onSubmit : async (value) => {
            const res = await axios.get("http://localhost:3001/users");
            const users = res.data.find((user,index)=>{
                return user.email === value.email
            })
            console.log(users);

            if (users) {
                setIsLoggin(`سلام ${users.firstname}`);
            } else {
                setIsLoggin("اطلاعات شما درست نیست. لطفا در سایت ثبت نام کنید")
            }
        }
    })


    // if (isLoggin === true) {
    //     loggin = "a"
    // } else {
    //     loggin = "b"
    // }


    const [passEye, setPassEye] = useState(false);
    const [typePass, setTypePass] = useState("password");
    // const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");


    const onClickHandler = () => {
        setPassEye(true);
        setTypePass("text");
    }
    const offClickHandler = () => {
        setPassEye(false);
        setTypePass("password");
    }

    let passEyeComponent = <FiEyeOff className="passeye-form" color="#ffffff" />;
    if (passEye) {
        passEyeComponent = <FiEye className="passeye-form" color="#ffffff" onClick={offClickHandler} />;
    } else {
        passEyeComponent = <FiEyeOff className="passeye-form" color="#ffffff" onClick={onClickHandler} />;
    }

    // const emailHandler = (e) => {
    //     setEmail(e.target.value);
    // }

    // const passHandler = (e) => {
    //     setPass(e.target.value);
    // }

    // const submitHandler = () => {
    //     if (email === "" || pass === "") {
    //         setIsMassage(false);
    //     }
    //     else {
    //         setIsMassage(true);
    //     }
    // }

    // let massage;
    // if (isMassage) {
    //     massage = "خوش آمدید";
    // } else {
    //     massage = "فیلد های زیر ضروری هستند";
    // }

    return (
        <>
            <h2 className="title-welcome-user"> { isLoggin } </h2>
            <form onSubmit={formikLogin.handleSubmit}>
                <input className="input-form" id="email" type="email" placeholder="پست الکترونیک *" required value={formikLogin.email} onChange={formikLogin.handleChange} />
                <label className="pass-label-form">
                    <input className="input-form pass-form" id="password" type={typePass} placeholder="کلمه عبور *" required value={formikLogin.password} onChange={formikLogin.handleChange} />
                    {passEyeComponent}
                </label>
                <button className="submit-form" type="submit">ورود</button>
            </form>
            <a className="forgot-link" href="#">فراموش کردید؟</a>
        </>
    )
}


export default React.memo(CustomLogin);

