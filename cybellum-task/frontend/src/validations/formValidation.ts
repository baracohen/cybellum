import * as yup from "yup";

export const formSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }).required();