import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  console.log(toDos);

  const id = useParams().id;
  const toDo = toDos.find(
    (toDo) => toDo.id === parseInt(id)
  );

  return (
    <div>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
