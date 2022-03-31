import React, { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState([]);
  const [titleObj, setTitleObj] = useState({
    id: 21,
    greeting: "Hi There...!",
    title: "Use Object and State In UseState",
  });

  console.log(people, "Intiated");
  const addItem = () => {
    let obj = {
      id: new Date().getTime(),
      name: "nayan" + (people.length + 1),
    };
    // using spread operator
    setPeople((people) => [...people, obj]);
    /* or;
     setPeople([...people, obj]);*/

    //normal Js
    /* let newPeople = people.slice();
     newPeople.push(obj);
     setPeople(newPeople);
     console.log(newPeople);*/
  };
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <section>
        <div>
          <h4>{titleObj.greeting}</h4>
          <h6>
            {titleObj.title}
            <button
              className="btn-sm"
              onClick={() => {
                setTitleObj({ ...titleObj, title: "Title changed" });
              }}
            >
              Title
            </button>
          </h6>
        </div>
        <div>
          <button className="btn" onClick={() => addItem()}>
            Add
          </button>
          <button
            className="btn"
            onClick={() => {
              setPeople([]);
            }}
          >
            clear
          </button>
        </div>

        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button className="btn" onClick={() => removeItem(id)}>
                remove
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default UseStateArray;
