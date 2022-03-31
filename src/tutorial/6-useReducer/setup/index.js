import React, { useState, useReducer, useContext, useEffect } from "react";
// import Modal from "./Modal";
import { data } from "../../../data";
import reducer from "../setup/reducer";
// reducer function

const ItemContext = React.createContext();

const componentData = {
  data: data,
  modalContent: "",
  isModalVisble: false,
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, componentData);
  const [name, setName] = useState("");

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  return (
    <ItemContext.Provider
      value={{ closeModal, modalContent: state.modalContent }}
    >
      {state.isModalVisble && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="btn">Add</button>
      </form>
      <section className="container">
        {state.data.map((people) => {
          return (
            <div className="item" key={people.id}>
              <h4>{people.name}</h4>
              <button onClick={() => removeItem(people.id)}>delete</button>
            </div>
          );
        })}
      </section>
    </ItemContext.Provider>
  );
};

const Modal = () => {
  useEffect(() => {
    setTimeout(() => closeModal(), 3000);
  });
  const { modalContent, closeModal } = useContext(ItemContext);
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Index;
