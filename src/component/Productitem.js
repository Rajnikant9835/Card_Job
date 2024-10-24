import { useState } from "react";
import Productdate from "./Productdate";
import "./Productitem.css";
import Productname from "./Productname";

function Productitem(props) {
  const idx = props.idx;
  const Date = [
    {
      day: 3,
      month: "june",
      year: 2023,
    },
    {
      day: 5,
      month: "july",
      year: 2027,
    },
    {
      day: 4,
      month: "May",
      year: 2093,
    },
    {
      day: 9,
      month: "April",
      year: 3093,
    },
  ];

  const NameList = [
    { name: "Google" },
    { name: "Facebook" },
    { name: "Uber" },
    { name: "Ola" },
  ];

//   const NameList2 = [
//     { name: "Microsoft" },
//     { name: "Linkedin" },
//     { name: "Patym" },
//     { name: "chegg" },
//   ];
  const NameList3 = "Applied";

  const [itemName, setItemname] = useState(NameList[idx].name);

  //function for clicking on button
  function Handler() {
    setItemname(NameList3)
    console.log("clicked");
  }

  return (
    <div className="Productitem">
      <Productdate
        day={Date[idx].day}
        month={Date[idx].month}
        year={Date[idx].year}
      ></Productdate>
      <Productname name={itemName}></Productname>
      <button onClick={Handler}>Apply Now</button>
    </div>
  );
}

export default Productitem;
