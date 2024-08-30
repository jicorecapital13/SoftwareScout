/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Pagination = ({ previous, next }) => {
  // Ensure slugs and titles are correctly passed to the links
  const prevSlug = previous?.slug || "";
  const nextSlug = next?.slug || "";
  const prevTitle = previous?.title || "Previous Post";
  const nextTitle = next?.title || "Next Post";

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        mt: 5,
        borderTop: "1px solid",
        borderColor: "muted",
        pt: 4,
      }}
    >
      {previous && prevSlug && (
        <Link
          to={prevSlug}
          rel="prev"
          sx={paginationLinkStyles("left")}
        >
          &larr; {prevTitle}
        </Link>
      )}
      {next && nextSlug && (
        <Link
          to={nextSlug}
          rel="next"
          sx={paginationLinkStyles("right")}
        >
          {nextTitle} &rarr;
        </Link>
      )}
    </div>
  );
};

// Styling function for pagination links
const paginationLinkStyles = (align) => ({
  width: ["100%", "auto"],
  fontSize: 3,
  fontWeight: "bold",
  color: "primaryColor",
  textDecoration: "none",
  transition: "color 0.3s ease",
  textAlign: align,
  "&:hover": {
    color: "text",
  },
  "&:focus": {
    outline: "none",
    boxShadow: (theme) => `0 0 0 3px ${theme.colors.primary}`,
  },
});

export default Pagination;
