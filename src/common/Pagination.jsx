import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemCount, pageSize } = props;
  const pageCOunt = Math.ceil(itemCount / pageSize);
  if (pageCOunt === 1) return null;
  const page = _.range(1, pageCOunt + 1);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {page.map(e => (
            <li
              className={
                "page-item " + (props.currentPage === e ? "active" : "")
              }
              key={e}
            >
              {/* NOT EVER NEVER PUT HREF TO <a> IN PAGINATION !!!! */}
              <button
                className="page-link"
                style={{ cursor: "pointer" }}
                onClick={() => props.onPageChange(e)}
              >
                {e}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
