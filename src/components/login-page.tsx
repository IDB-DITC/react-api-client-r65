import { useNavigate ,redirect, Navigate} from "react-router";
import Login, { LoginSchema } from "../model/login";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { LoginApi } from "../services/auth-api";
import GetAuthContext from "../security/auth-state-provider";


export default function LoginPage() {
    const navigate = useNavigate();
    const [model, updateModel] = useState<Login>(new Login());
    const { SignIn, isAuthencated } = GetAuthContext();

    async function SubmitHandler(formValues: Login, helpers: FormikHelpers<Login>) {
        try {
            var res = await LoginApi(formValues)
            if (res.status >= 200 && res.status < 300) {
                SignIn(res.data.token, res.data.name)
                navigate("/");
            }
            else {
                console.log(res);
            }
        } catch (e) {
            console.log(e);
        }
       
    }
    if (isAuthencated)
    {
        return <Navigate to="/"/>
    }


    return (
        <Formik
            enableReinitialize
            initialValues={model}
            validateOnChange={true}
            validationSchema={LoginSchema}
            onSubmit={SubmitHandler}
        >{(props) => (
                <Form>
                    <fieldset>
                   <legend>Login</legend>
                <div>
                    <label>User Name :
                        <Field name="userName" />
                        <ErrorMessage name="userName" component="div"></ErrorMessage>
                    </label>
                </div>
                    <div>
                        <label>Password :
                            <Field name="password" />
                            <ErrorMessage name="password" component="div"></ErrorMessage>
                        </label>
                    </div>
                    <button>Login</button>
                    </fieldset>
            </Form>
        )}


        </Formik>
    )
} 