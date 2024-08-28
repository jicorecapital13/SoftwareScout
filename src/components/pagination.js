/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Pagination = ({ previous, next }) => (
  <div sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
    {previous && (
      <Link to={previous.slug} rel="prev">
        &larr; {previous.title}
      </Link>
    )}
    {next && (
      <Link to={next.slug} rel="next">
        {next.title} &rarr;
      </Link>
    )}
  </div>
);

export default Pagination;
