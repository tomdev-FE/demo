import * as yup from "yup";

export const addressSchema = yup.object().shape({
  country: yup.string().required("Country is required"),
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  company: yup.string(),
  address: yup.string().required("Address is required"),
  apartment: yup.string(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zip_code: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be a positive value")
    .integer("Must be a number")
    .required("Zip code is required"),
  phone: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be a positive value")
    .integer("Must be a number")
    .required("Phone number is required"),
});
