# Coding Assessment - FED @nailsa2z

Thanks for applying to the Front-End Developer position at Nails A2Z. Remember that you have only 1.5 hours to complete this assessment. Good luck!

## Prompt

Imagine that you are building an e-commerce website that sells various products. One of the key features of your website is to provide customers with accurate shipping rates based on their shipping address and the products they want to purchase. Your task is to build a checkout page with input fields for the customer's shipping address, then call the 3rd-party shipping service Shippo API to return a list of the shipping rates.

## Prerequisite

1. Install `create-react-app` and `axios`
2. Install any UI libraries or frameworks of your choice such as Ant Design, Reactstrap, MUI, etc.
3. Install an API client tool such as Postman or Insomnia to test the API

## Requirements

- The checkout page should have a similar layout to the screenshot below
  ![Checkout](checkout.jpg)
- The input fields for the customer's shipping address include country, first name, last name, company, address, address line 2, city, state, zip code, and phone number.
- When submitting the "Calculate Shipping" button, a POST request is sent to Shippo API endpoint at `https://api.goshippo.com/shipments` with all necessary information.
- Display the response received from Shippo including a list of available shipping services, estimated delivery times, and costs for the customer to select.

## Tips

- Handle errors, input validation, and button states properly.
- Focus on building a clean and well-organized code structure.
- Use descriptive function and variable names.
- Document your code and explain your thought process as you write it.

## Example Request to Shippo

```json
POST https://api.goshippo.com/shipments
Content-Type: application/json
Authorization: ShippoToken shippo_test_86dda5ed13316ea0b728d1e58f193ccee5fe873b

{
    "address_from": {
        "name": "Nails A2Z",
        "street1": "123 West Main Street",
        "city": "Dallas",
        "state": "TX",
        "zip": "75208",
        "country": "US",
        "phone": "4691234567",
        "email": "support@nailsa2z.com"
    },
    "address_to": {
        "name": "John Doe",
        "street1": "123 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94103",
        "country": "US",
        "phone": "4151234567",
        "email": "john@example.com"
    },
    "parcels": [
        {
            "length": "10",
            "width": "8",
            "height": "6",
            "distance_unit": "in",
            "weight": "1.2",
            "mass_unit": "oz"
        },
        {
            "length": "12",
            "width": "28",
            "height": "8",
            "distance_unit": "in",
            "weight": "7.6",
            "mass_unit": "oz"
        },
        {
            "length": "1.4",
            "width": "0.6",
            "height": "0.4",
            "distance_unit": "ft",
            "weight": "1",
            "mass_unit": "lb"
        }
    ],
    "async": false,
    "carrier_accounts": [
        "4823122e77ab4686812eb476e31c9467"
    ]
}
```

## Example Response from Shippo

```json
...
"rates": [
    {
        "object_created": "2023-04-12T02:43:27.205Z",
        "object_id": "d28159a3a14d471fae42e30d3ca6b11e",
        "object_owner": "info@nailsa2z.com",
        "shipment": "3b4b47d40fe64259be93b06755713eca",
        "attributes": [
            "FASTEST"
        ],
        "amount": "279.69",
        "currency": "USD",
        "amount_local": "279.69",
        "currency_local": "USD",
        "provider": "UPS",
        "provider_image_75": "https://shippo-static.s3.amazonaws.com/providers/75/UPS.png",
        "provider_image_200": "https://shippo-static.s3.amazonaws.com/providers/200/UPS.png",
        "servicelevel": {
            "name": "Next Day Air® Early",
            "token": "ups_next_day_air_early_am",
            "terms": "",
            "extended_token": "ups_next_day_air_early_am",
            "parent_servicelevel": null
        },
        "estimated_days": 1,
        "arrives_by": "08:30:00",
        "duration_terms": "Next business day delivery by 8:30 a.m., 9:00 a.m., or 9:30 a.m. ",
        "messages": [],
        "carrier_account": "4823122e77ab4686812eb476e31c9467",
        "test": true,
        "zone": null,
        "included_insurance_price": null
    },
    {
        "object_created": "2023-04-12T02:43:27.208Z",
        "object_id": "a8be7647829046e8affb272609042e60",
        "object_owner": "info@nailsa2z.com",
        "shipment": "3b4b47d40fe64259be93b06755713eca",
        "attributes": [
            "BESTVALUE",
            "CHEAPEST"
        ],
        "amount": "43.70",
        "currency": "USD",
        "amount_local": "43.70",
        "currency_local": "USD",
        "provider": "UPS",
        "provider_image_75": "https://shippo-static.s3.amazonaws.com/providers/75/UPS.png",
        "provider_image_200": "https://shippo-static.s3.amazonaws.com/providers/200/UPS.png",
        "servicelevel": {
            "name": "Ground",
            "token": "ups_ground",
            "terms": "",
            "extended_token": "ups_ground",
            "parent_servicelevel": null
        },
        "estimated_days": 3,
        "arrives_by": null,
        "duration_terms": "Delivery times vary. Delivered usually in 1-5 business days.",
        "messages": [],
        "carrier_account": "4823122e77ab4686812eb476e31c9467",
        "test": true,
        "zone": null,
        "included_insurance_price": null
    }
],
...
```

##### Good luck!

