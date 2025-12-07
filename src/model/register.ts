import * as Yup from "yup";
export default class Register {
  userName: string='';
  //userEmail!: string;
  password: string = '';
  comparePassword: string = '';
}

export const RegisterSchema = Yup.object<Register>().shape({
    userName: Yup.string().required().email().min(3).max(50).label("User Name"),
    password: Yup.string().required().min(4).max(50).label("Password"),
    comparePassword: Yup.string().required().min(4).max(50).oneOf([Yup.ref("password")], "Password does not match").label("Confirm Password"),
})
