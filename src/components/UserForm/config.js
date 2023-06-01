/* eslint-disable no-template-curly-in-string */
import * as yup from "yup";

const tooMinSymbolsMessage = "Max length ${min} symbols";
const tooMaxSymbolsMessage = "Min length ${min} symbols";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, tooMinSymbolsMessage)
    .max(40, tooMaxSymbolsMessage)
    .required("*"),
  email: yup.string().email().required("*"),
  phone: yup.number().required("*"),
  address: yup
    .string()
    .min(10, tooMinSymbolsMessage)
    .max(50, tooMaxSymbolsMessage)
    .required("*"),
});
