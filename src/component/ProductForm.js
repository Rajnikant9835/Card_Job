import { useState } from "react";
import "./ProductForm.css";

function ProductForm(props) {
  //use usestate for change title and date
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");

  //function for change title
  function ChangeTitleHandler(event) {
    setTitle(event.target.value);
  }

  //function for change date
  function ChangeDateHandler(event) {
    setDate(event.target.value);
  }

  //for after submit
  function SubmitHandler(event) {
    event.preventDefault(); //this line use for remove the default function of button

    const AllCompany = {
      title: newTitle,
      date: newDate,
    };
    // console.log(AllCompany);

    props.onSaveProduct(AllCompany);

    setTitle("");
    setDate("");
  }

  return (
    <form className="ProductForm" onSubmit={SubmitHandler}>
      <div className="Title_name">
        <label>Title: </label>
        <input
          type="text"
          onChange={ChangeTitleHandler}
          value={newTitle}
        ></input>
      </div>
      <div className="Date_item">
        <label>Date: </label>
        <input
          type="Date"
          onChange={ChangeDateHandler}
          min="2003-10-3"
          max="2033-30-5"
          value={newDate}
        ></input>
      </div>
      <div>
        <button className="btnHire">New Job</button>
      </div>
    </form>
  );
}

export default ProductForm;
