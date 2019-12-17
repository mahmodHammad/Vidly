import React from "react";

const ListGroup = props => {
  const { genres, textProperty, filterGenre, selected } = props;
  return (
    <div>
      <ul className="list-group">
        {genres.map(e => (
          <li
            key={e._id}
            style={{ cursor: "pointer" }}
            className={
              "list-group-item " + (selected.name === e.name ? "active" : "")
            }
            onClick={() => filterGenre(e)}
          >
            {e[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name"
};

export default ListGroup;
