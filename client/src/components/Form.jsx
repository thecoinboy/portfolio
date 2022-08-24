import * as Yup from 'yup'
import axios from 'axios'
import React from 'react'
import '../css/Form.css'
import Form_img from '../image/heart.png'
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik'

const Form = () => {
    // console.log(Yup)
    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }
    const validationSchema = Yup.object({ 
        name:Yup.string().min(3).max(15).required("Please enter your valid name"),
        email:Yup.string().email().required("Please enter your valid name"),
        subject:Yup.string().min(3).max(30),
        message:Yup.string().required(),
    })
    const {touched, values, errors, resetForm, handleChange,handleBlur, handleSubmit} = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            axios.post("/contact", {values, resetForm}).then((res, err) => {
                if (err) {
                    console.log("an error accured" + err)
                } else {
                    toast(res.data.message)
                }
                resetForm();
            })
            
        },
    })

    return (
        <div className="form_contaienr" id='contact'>
            <div>
                <div className="form_r">
                    <img src={Form_img} alt="" />
                    <form onSubmit={handleSubmit}>
                        <div className="form_control">
                            <ToastContainer />
                            <h2>Get in touch</h2>
                            <input onBlur={handleBlur} placeholder='*Full name' value={values.name} name="name" className='inpu' onChange={handleChange} /> 
                            {errors.name && touched.name ? <div className='muted'> <span> {errors.name} </span> </div>  : null }
                            <input onBlur={handleBlur} type="email" placeholder='*E-mail' value={values.email} name='email' className='inpu' onChange={handleChange} />{touched.email && errors.email ? <div className='muted'> {errors.email} </div> : null}
                            <input type="text" placeholder='Subject' name='subject' value={values.subject} className='inpu' onChange={handleChange} />
                            <textarea onBlur={handleBlur} name="message" className='inpu' onChange={handleChange} value={values.message} cols="30" rows="3" placeholder='*Message' />
                            {touched.message && errors.message ? <div className='muted'> {errors.message} </div> : null}
                            <input type="submit" className='button f_button' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;