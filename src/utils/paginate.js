import _ from "lodash";

export default function paginate(items, pageNumber, pagesize) {
  return _(items)
    .slice((pageNumber - 1) * pagesize)
    .take(pagesize)
    .value();
}
