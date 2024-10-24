import "./Card.css";
import Productitem from "./Productitem";

function Card() {
  const IndexList = [
    {
      idx: 0,
    },
    {
      idx: 1,
    },
    {
      idx: 2,
    },
    {
      idx: 3,
    },
  ];

  return (

    <div className="Card">
      <Productitem idx={IndexList[0].idx}></Productitem>
      <Productitem idx={IndexList[1].idx}></Productitem>
      <Productitem idx={IndexList[2].idx}></Productitem>
      <Productitem idx={IndexList[3].idx}></Productitem>
    </div>
  );
}

export default Card;
