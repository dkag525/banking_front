import Photo from "../Photo/Photo";

let TransactionHistory = [
  {
    id: 1,
    image: Photo.deposite_icon,
    depositeFrom: "Deposite from my Card",
    date: "28 January 2021",
    price: `${"-$850"}`,
  },
  {
    id: 2,
    image: Photo.depositePaypal_icon,
    depositeFrom: "Deposite Paypal",
    date: "25 January 2021",
    price: `${"$2500"}`,
  },
  {
    id: 3,
    image: Photo.jemi_icon,
    depositeFrom: "Jemi Wilson",
    date: "21 January 2021",
    price: `${"$5200"}`,
  },
];

export default TransactionHistory;
