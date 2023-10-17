import * as yup from 'yup';

export const signSchema = yup.object().shape({
    name: yup.string().min(3,"Must be more than three characters").required("Required"),
    email: yup.string().email("Please enter a valid Email address").required("Required"),
    pass: yup
                .string()
                .min(8,'Password must be 8 digit long.')
                .matches(/[A-Z]/, "Password must have a Upper Case character.")
                .matches(/[a-z]/,'Password must have a Lower Case character.')
                .matches(/[0-9]/,"Password must have a Number.")
                .matches(/[^\w]/,"Password must caontain a Special Character.")
                .required("Required*"),
    confirmpass: yup
                        .string()
                        .oneOf([yup.ref("pass"),null],"Passwords must match.")
                        .required("Required*")
})

export const logSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid Email address").required("Required"),
    pass: yup
                .string()
                .min(8,'Password must be 8 digit long.')
                .matches(/[A-Z]/, "Password must have a Upper Case character.")
                .matches(/[a-z]/,'Password must have a Lower Case character.')
                .matches(/[0-9]/,"Password must have a Number.")
                .matches(/[^\w]/,"Password must caontain a Special Character.")
                .required("Required*"),
})