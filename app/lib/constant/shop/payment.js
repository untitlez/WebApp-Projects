// Credit Card
export const creditCardFields = [
  {
    name: "cardName",
    type: "text",
    label: "Name on Card",
    placeholder: "Full Name",
    validate: { required: "Please enter your full name." },
  },
  {
    name: "cardNumber",
    type: "text",
    label: "Card Number",
    placeholder: "XXXX-XXXX-XXXX-XXXX",
    maxLength: 19,
    validate: {
      required: "Card number is required",
      pattern: {
        value: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
        message: "Must be 16 digits (format: 0000-0000-0000-0000)",
      },
    },
  },
  {
    name: "expiry",
    type: "text",
    label: "Expiry (MM/YY)",
    placeholder: "MM/YY",
    maxLength: 5,
    validate: {
      required: "Expiry is required",
      pattern: {
        value: /^(0[0-9]|1[0-9])\/\d{2}$/,
        message: "Format MM/YY",
      },
    },
  },
  {
    name: "cvv",
    type: "password",
    label: "CVV",
    placeholder: "***",
    maxLength: 3,
    validate: {
      required: "CVV is required",
      pattern: {
        value: /^[0-9]{3}$/,
        message: "Must be 3 digits",
      },
    },
  },
];

// Bank Transfer
export const bankFields = [
  {
    name: "bankName",
    type: "text",
    placeholder: "Bank Account Number",
    maxLength: 10,
    validate: {
      required: "Bank account number is required",
      pattern: {
        value: /^\d{3}-\d{1}-\d{5}-\d{1}$/,
        message: "Must be 10 digits (format: 000-0-00000-0)",
      },
    },
  },
];

export const bankItems = [
  {
    name: "Kasikornbank",
    code: "KBANK",
    src: "/bank/kbank.svg",
    color: "#138f2d",
  },
  {
    name: "Siam Commercial Bank",
    code: "SCB",
    src: "/bank/scb.svg",
    color: "#4e2e7f",
  },
  {
    name: "Bangkok Bank",
    code: "BBL",
    src: "/bank/bbl.svg",
    color: "#1e4598",
  },
  {
    name: "Krungthai Bank",
    code: "KTB",
    src: "/bank/ktb.svg",
    color: "#1ba5e1",
  },
  {
    name: "Krungsri",
    code: "BAY",
    src: "/bank/bay.svg",
    color: "#fec43b",
  },
  {
    name: "ttb",
    code: "TTB",
    src: "/bank/ttb.svg",
    color: "#ecf0f1",
  },
  {
    name: "UOB Bank",
    code: "UOB",
    src: "/bank/uob.svg",
    color: "#0b3979",
  },
];
