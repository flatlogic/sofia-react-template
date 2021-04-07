import ellieSmithImg from "../../assets/tables/ellieSmith.svg";
import floydMilesImg from "../../assets/tables/floydMiles.svg";
import janeCooperImg from "../../assets/tables/janeCooper.svg";
import rosaFloresImg from "../../assets/tables/rosaFlores.svg";
import bagIcon from "../../assets/tables/bagIcon.svg";
import folderIcon from "../../assets/tables/folderIcon.svg";
import joystickIcon from "../../assets/tables/joystickIcon.svg";
import basketIcon from "../../assets/tables/basketIcon.svg";

export default {
  firstTable: [
    {
      id: "checkbox11",
      img: janeCooperImg,
      name: "Jane Cooper",
      company: "Barrone LLC.",
      city: "Kalamazoo, MI",
      state: "Michigan",
    },
    {
      id: "checkbox12",
      img: ellieSmithImg,
      name: "Ellie Smith",
      company: "Abstergo Ltd.",
      city: "Bainbridge Island, WA",
      state: "Massachusetts",
    },
    {
      id: "checkbox13",
      img: rosaFloresImg,
      name: "Rosa Flores",
      company: "Binford Ltd.",
      city: "Leucadia, CA",
      state: "Minnesota",
    },
    {
      id: "checkbox14",
      img: floydMilesImg,
      name: "Floyd Miles",
      company: "Biffco Enterprises Ltd.",
      city: "Idaho city, ID",
      state: "North Dakota",
    },
  ],
  secondTable: [
    {
      id: "checkbox21",
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      product: "series",
      price: "$5.22",
      date: "5/27/21",
      city: "Pembroke Pines",
      color: "secondary-cyan",
      status: "Sent",
    },
    {
      id: "checkbox22",
      name: "Ellie Smith",
      email: "ellie.smith@example.com",
      product: "chair pad",
      price: "$53.99",
      date: "3/19/21",
      city: "Austin",
      color: "secondary-cyan",
      status: "Sent",
    },
    {
      id: "checkbox23",
      name: "Rosa Flores",
      email: "rosa.flores@example.com",
      product: "dishes",
      price: "$12.24",
      date: "4/01/21",
      city: "Naperville",
      color: "secondary-yellow",
      status: "Pending",
    },
    {
      id: "checkbox24",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-red",
      status: "Declined",
    },
  ],
  transactionWidget: [
    {
      id: 1,
      icon: basketIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
    },
    {
      id: 2,
      icon: joystickIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
    },
    {
      id: 3,
      icon: folderIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
    },
    {
      id: 4,
      icon: bagIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
    }
  ],
  tasksWidget: [
    {
      id: 1,
      description: "Create An Image",
      time: "9 AM",
      completed: false,
    },
    {
      id: 2,
      description: "Team Design Miting",
      time: "11 AM",
      completed: false,
    },
    {
      id: 3,
      description: "Create An Image",
      time: "2.30 PM",
      completed: false,
    },
    {
      id: 4,
      description: "Interview With John Hamm",
      time: "4 PM",
      completed: false,
    },
  ]
}
