import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { id } = useParams();
  const [personName, setPersonName] = useState("default");

  useEffect(() => {
    const personObj = data.find((per) => per.id === Number(id));
    setPersonName(personObj.name);
  }, []);

  return (
    <div>
      <h2>{personName}</h2>
      {/* <p>Nayan</p> */}
    </div>
  );
};

export default Person;
