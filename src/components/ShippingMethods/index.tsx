import React, { useState } from "react";
import clsx from "clsx";

import { ShippingMethod } from "types";

type ShippingMethodsProps = {
  shippingMethods: ShippingMethod[];
  isSubmitSuccessful: boolean;
  isLoading: boolean;
};

const ShippingMethods = (props: ShippingMethodsProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    setSelectedItem(id);
  };
  const conditionShowDataResponse =
    props?.isSubmitSuccessful === true && props?.isLoading === false;
  return (
    <>
      {conditionShowDataResponse ? (
        <div className="grid max-w-md	">
          <div>
            <p className="mt-8 text-lg font-medium">Shipping Methods</p>
            {props?.shippingMethods.length > 0 ? (
              <ul className="mt-5 grid rounded-lg border border-gray-300">
                {props?.shippingMethods?.map((el) => (
                  <li
                    key={el?.object_id}
                    onClick={() => handleItemClick(el?.object_id)}
                  >
                    <input
                      className="peer hidden"
                      id={el?.object_id}
                      type="radio"
                      name={el?.object_id}
                    />
                    <div className="justify-between flex cursor-pointer select-none p-4 border-gray-300 border-b ">
                      <div className="flex items-center">
                        <span
                          className={clsx(
                            selectedItem === el?.object_id
                              ? "border-gray-700"
                              : "",
                            "box-content block h-3 w-3 rounded-full border-8 border-gray-300 bg-white"
                          )}
                        />
                        <p className="text-slate-500 text-sm leading-6 pl-2">
                          {el?.servicelevel?.name} {" ("} {el?.estimated_days}{" "}
                          {`business ${
                            el?.estimated_days > 1 ? "days" : "day"
                          }`}
                          {" )"}
                        </p>
                      </div>
                      <div className="ml-5">
                        <p className="font-semibold">$ {el?.amount}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <h4>Don't have shipping methods, please try again</h4>
              </>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ShippingMethods;
