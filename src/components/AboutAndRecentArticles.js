/** @jsx jsx */
import { jsx } from "theme-ui";

const AboutSection = () => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "3rem 2rem",
        borderTop: "1px solid #e0e0e0", 
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* About Section */}
      <div sx={{ flex: "1", paddingRight: "2rem" }}>
        <h2 sx={{ fontSize: [4, 5], fontWeight: "bold", marginBottom: "1rem" }}>
          Hey Folks! I’m John.
        </h2>
        <p>
          I’m a software developer and content creator who enjoys
          breaking down complex concepts into clear, actionable steps. I run a
          tutorial YouTube channel focused on software reviews, offering insights
          that help users make informed decisions and improve their skills with
          ease. On my{" "}
          <a
            href="https://www.youtube.com/@softwarediscoverer"
            target="_blank"
            rel="noreferrer noopener"
            sx={{ color: "primary", textDecoration: "none", ":hover": { textDecoration: "underline" } }}
          >
            YouTube channel
          </a>
          , I share my expertise in content creation and AI through easy-to-follow
          tutorial videos. This blog was created to expand on that, offering even
          more valuable tutorials and resources to help others succeed.
        </p>
        <div sx={{ marginTop: "1rem" }}>
          <a
            href="/about"
            target="_blank"
            rel="noreferrer noopener"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.5rem 1rem",
              backgroundColor: "primary",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
              ":hover": {
                backgroundColor: "secondary",
              },
            }}
          >
            <h4>Read more about me</h4>
            <svg
              viewBox="0 0 448 512"
              fill="currentColor"
              sx={{ marginLeft: "0.5rem" }}
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
