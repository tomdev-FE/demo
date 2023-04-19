import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "components/Forms/Select";
import { useState } from "react";
import { addressSchema } from "utils/validationSchema/yup";
import { ShippingAddress } from "types";
import { baseApi } from "utils/baseApi";
import WrapperComponent from "components/Forms/Wrapper";
import Button from "components/Forms/Button";
import Input from "components/Forms/Input";
import ShippingMethods from "components/ShippingMethods";
import { ShippingMethod } from "types";
import CheckBox from "components/Forms/Checkbox";

const defaultValues = {
  country: "US",
  first_name: "",
  last_name: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  state: "TX",
  zip_code: "",
  phone: "",
};
const baseData = {
  address_from: {
    name: "Nails A2Z",
    street1: "123 West Main Street",
    city: "Dallas",
    state: "TX",
    zip: "75208",
    country: "US",
    phone: "4691234567",
    email: "support@nailsa2z.com",
  },
  parcels: [
    {
      length: "10",
      width: "8",
      height: "6",
      distance_unit: "in",
      weight: "1.2",
      mass_unit: "oz",
    },
    {
      length: "12",
      width: "28",
      height: "8",
      distance_unit: "in",
      weight: "7.6",
      mass_unit: "oz",
    },
    {
      length: "1.4",
      width: "0.6",
      height: "0.4",
      distance_unit: "ft",
      weight: "1",
      mass_unit: "lb",
    },
  ],
  async: false,
  carrier_accounts: ["4823122e77ab4686812eb476e31c9467"],
};

export default function ShippingAddressInfo() {
  const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([]);
  const [flag, setFlag] = useState(true);

  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(addressSchema),
    defaultValues: defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: ShippingAddress) => {
    if (Object.keys(data).length > 0) {
      const name = data?.first_name + " " + data?.last_name;
      const addressToData = {
        name: name,
        street1: data?.address,
        city: data?.city,
        state: data?.state,
        zip: data?.zip_code,
        country: data?.country,
        phone: data?.phone,
        email: "john@example.com",
      };
      const infoReqData = {
        ...baseData,
        address_to: addressToData,
      };
      baseApi
        .post("/", infoReqData)
        .then((response) => setShippingMethods(response?.data?.rates))
        .then(() => setFlag(false))
        .catch((errors) => console.log(errors));
    }
  };

  return (
    <>
      <main>
        <section className="bg-gray-100">
          <article className="min-h-screen py-16 layout">
            <p className="mt-8 text-lg font-medium">Shipping address</p>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-[580px] mt-8 space-y-4"
              >
                <Select id="country" label="Country/Region">
                  <option value="US">United States</option>
                  <option value="VI">Vietnam</option>
                </Select>
                <WrapperComponent>
                  <Input
                    label="Name"
                    id="first_name"
                    placeholder="First name"
                  />
                  <Input label="Name" id="last_name" placeholder="Last name" />
                </WrapperComponent>

                <Input
                  label="Company"
                  id="company"
                  placeholder="Company (optional)"
                />
                <Input label="Company" id="address" placeholder="Address" />
                <Input
                  label="Company"
                  id="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                />
                <WrapperComponent>
                  <Input label="Company" id="city" placeholder="City" />
                  <Select id="state" label="State">
                    <option value="TX">Texas</option>
                    <option value="CA">San Francisco</option>
                  </Select>
                  <Input label="Company" id="zip_code" placeholder="ZIP code" />
                </WrapperComponent>

                <Input label="phone" id="phone" placeholder="Phone" />
                <CheckBox />
                <Button type="submit" isSubmitting={isSubmitting} flag={flag}>
                  Calculate Shipping
                </Button>
              </form>
            </FormProvider>
            <ShippingMethods
              shippingMethods={shippingMethods}
              isSubmitSuccessful={isSubmitSuccessful}
              isSubmitting={isSubmitting}
              flag={flag}
            />
          </article>
        </section>
      </main>
    </>
  );
}
