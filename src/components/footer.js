/** @jsx jsx */
import { jsx } from "theme-ui";
import SocialIcons from "./social-media-icons";
import FooterData from "../util/footer.json";
import ReactMarkdown from "react-markdown";

const footerStyles = {
  footerContainer: {
    variant: "variants.container",
    bg: "primaryBg",
    py: 6,
    mt: 5,
    textAlign: "center",
  },
  footerLinks: {
    fontSize: 1, // Smaller font size for links
    color: "primaryColor",
    display: "block",
    mt: 3, // Add margin-top to space it out from other footer content
    a: {
      color: "primaryColor",
      "&:hover": {
        color: "black",
      },
    },
  },
};

const Footer = () => {
  return (
    <footer>
      <div sx={footerStyles.footerContainer}>
        <SocialIcons />

        {/* Render the footer text */}
        <ReactMarkdown
          children={FooterData.footerText}
          sx={{
            variant: "variants.markdown",
            pb: 0,
          }}
        />

        {/* Add Privacy Policy, Disclaimer, and Terms links with smaller font */}
        <div sx={footerStyles.footerLinks}>
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/disclaimer">Disclaimer</a> |{" "}
          <a href="/terms-and-conditions">Terms & Conditions</a>|{" "}
          <a href="affiliate-disclosure/">Affliate Disclosure</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
