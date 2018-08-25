import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: "195",
    createdAt: 0
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: "1234",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "credit card",
    note: "",
    amount: "45",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

export default expenses;
