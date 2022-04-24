import React, { useState } from "react";
import "../styles/customformstyle.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Iranstate from "../iranstate/iranstates";
import { useFormik } from "formik";
import axios from "axios";

const CustomRegister = () => {

    const formikRegister = useFormik({
        initialValues : {
            "firstname" : "",
            "lastname" : "",
            "email" : "",
            "password" : "",
            "eduSelect" : "",
            "eduPlace" : "",
            "stateSelect" : "",
            "citySelect" : ""
        },
        onSubmit : async (value, reset) => {
            reset.resetForm()
            await axios.post("http://localhost:3001/users",value)
        }
    })

    // const [eduSelect, setEduSelect] = useState("");
    // const [stateSelect, setStateSelect] = useState("");
    // const [citySelect, setCitySelect] = useState("");

    const [passEye, setPassEye] = useState(false);
    const [typePass, setTypePass] = useState("password");
    let indexState = Object.keys(Iranstate).indexOf(formikRegister.values.stateSelect);
    let cityObject = Object.values(Iranstate);


    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");


    // const [isMassage, setIsMassage] = useState(false);


    // const firstNameHandler = (e) => {
    //     setFirstName(e.target.value);
    // }
    // const lastNameHandler = (e) => {
    //     setLastName(e.target.value);
    // }
    // const emailHandler = (e) => {
    //     setEmail(e.target.value);
    // }
    // const passHandler = (e) => {
    //     setPass(e.target.value);
    // }



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

    // const eduSelectHandler = (e) => {
    //     setEduSelect((prevState) => {
    //         prevState = e.target.value;
    //         return prevState;
    //     })
    // }
    let eduPlace;
    if (formikRegister.values.eduSelect !== "") {
        eduPlace = <input className="input-form" id="eduPlace" type="text" placeholder="محل تحصیل" value={formikRegister.eduPlace} onChange={formikRegister.handleChange} />
    }


    // const stateSelectHandler = (e) => {
    //     setStateSelect((prevState) => {
    //         prevState = e.target.value;
    //         return prevState;
    //     })
    // }

    // const citySelectHandler = (e) => {
    //     setCitySelect((prevState) => {
    //         prevState = e.target.value;
    //         return prevState;
    //     })
    // }


    // const submitHandler = () => {
    //     if (firstName === "" || lastName === "" || email === "" || pass === "" || eduSelect === "" || stateSelect === "" || citySelect === "") {
    //         setIsMassage(false);
    //     }
    //     else {
    //         setIsMassage(true);
    //     }
    // }

    // let massage;
    // if (isMassage) {
    //     massage = "ثبت نام با موفقیت آمیز انجام شد";
    // } else {
    //     massage = "فیلد های زیر ضروری هستند";
    // }

    return (
        <>
            <h1 className="title-form">رایگان ثبت نام کنید</h1>
            <form onSubmit={formikRegister.handleSubmit} onReset={formikRegister.handleReset}>
                <label className="half-label-form">
                    <input className="half-input-form input-form" id="firstname" type="text" placeholder="نام *" required value={formikRegister.firstName} onChange={formikRegister.handleChange} />
                    <input className="half-input-form input-form" id="lastname" type="text" placeholder="نام خانوادگی *" required value={formikRegister.lastName} onChange={formikRegister.handleChange} />
                </label>
                <input className="input-form" id="email" type="email" placeholder="پست الکترونیک *" required value={formikRegister.email} onChange={formikRegister.handleChange} />
                <label className="pass-label-form">
                    <input className="input-form pass-form" id="password" type={typePass} placeholder="کلمه عبور *" required value={formikRegister.password} onChange={formikRegister.handleChange} />
                    {passEyeComponent}
                </label>
                <select className="input-form" id="eduSelect" value={formikRegister.eduSelect} onChange={formikRegister.handleChange}>
                    <option className="edu-select-form disabled-edu-select-form" value="">تحصیلات *</option>
                    <option className="edu-select-form" value="diploma">دیپلم</option>
                    <option className="edu-select-form" value="associate Degree">فوق دیپلم</option>
                    <option className="edu-select-form" value="bachelor">لیسانس</option>
                    <option className="edu-select-form" value="master">فوق لیسانس</option>
                    <option className="edu-select-form" value="phd">دکترا</option>
                </select>
                {eduPlace}
                <select className="input-form" id="stateSelect" value={formikRegister.stateSelect} onChange={formikRegister.handleChange}>
                    <option className="edu-select-form disabled-edu-select-form" value="">انتخاب استان *</option>
                    {Object.keys(Iranstate).map((v, i) => {
                        return <option key={i} className="edu-select-form">{v}</option>
                    })}
                </select>
                <select className="input-form" id="citySelect" value={formikRegister.citySelect} onChange={formikRegister.handleChange}>
                    <option className="edu-select-form disabled-edu-select-form" value="">انتخاب شهر *</option>
                    {formikRegister.values.stateSelect !== "" ? cityObject[indexState].map((v, i) => {
                        return <option key={i} className="edu-select-form">{v}</option>
                    }) : ""}
                </select>
                <button className="submit-form" type="submit">ثبت نام</button>
            </form>
        </>
    )
}


export default CustomRegister;


