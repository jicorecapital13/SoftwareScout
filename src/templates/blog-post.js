/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import AuthorBio from "../components/AuthorBio";
import { GatsbyImage } from "gatsby-plugin-image";
import Pagination from "../components/pagination";
import slugify from "@sindresorhus/slugify";
import SiteMeta from "../util/site.json";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const blogPrefix = "/blog/";

const Post = ({ data, pageContext }) => {
  if (!data || !data.markdownRemark) {
    return (
      <Layout>
        <h1 sx={{ color: "primary" }}>Post not found</h1>
        <p>This post doesn't exist or there was an error retrieving it.</p>
      </Layout>
    );
  }

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const pageURL = frontmatter.title
    ? SiteMeta.meta.siteUrl + blogPrefix + slugify(frontmatter.title)
    : "";

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : null;

  const { previous, next } = pageContext;

  const tagLabel =
    frontmatter.tags && frontmatter.tags.length > 0 ? (
      <div sx={blogStyles.tagsDiv}>
        {frontmatter.tags.map((tag) => (
          <Link key={tag} to={`/tag/${slugify(tag)}`} sx={{ fontSize: 2 }}>
            − {tag}
          </Link>
        ))}
      </div>
    ) : null;

  const shareIcons = (
    <div sx={blogStyles.shareIcons}>
      <FacebookShareButton url={pageURL}>
        <FacebookIcon size={32} borderRadius="6" iconFillColor="#fff" />
      </FacebookShareButton>
      <TwitterShareButton url={pageURL}>
        <TwitterIcon size={32} borderRadius="6" iconFillColor="#fff" />
      </TwitterShareButton>
      <LinkedinShareButton url={pageURL}>
        <LinkedinIcon size={32} borderRadius="6" iconFillColor="#fff" />
      </LinkedinShareButton>
      <TelegramShareButton url={pageURL}>
        <TelegramIcon size={32} borderRadius="6" iconFillColor="#fff" />
      </TelegramShareButton>
      <WhatsappShareButton url={pageURL}>
        <WhatsappIcon size={32} borderRadius="6" iconFillColor="#fff" />
      </WhatsappShareButton>
      <EmailShareButton url={pageURL}>
        <EmailIcon size={32} borderRadius="6" iconFillColor="#fff" />
      </EmailShareButton>
    </div>
  );

  return (
    <Layout>
      <Seo
        title={frontmatter.title || "Untitled"}
        description={frontmatter.description || "No description available."}
        article={true}
      />
      <div sx={blogStyles.blogContainer}>
        <div>
          {/* Blog Header */}
          <section>
            <div sx={blogStyles.blogHead}>
              <h2>{frontmatter.title || "Untitled"}</h2>
              <p>{frontmatter.description || "No description available."}</p>
              <div
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                {tagLabel}
                <span>{frontmatter.date || "No date available"}</span>
              </div>
            </div>
            {Image && (
              <GatsbyImage
                image={Image}
                alt={
                  frontmatter.title
                    ? `${frontmatter.title} - Featured image`
                    : "Featured image"
                }
                sx={blogStyles.featuredImage}
              />
            )}
          </section>

          {/* Tags and Share */}
          <div>
            <h3>Share:</h3>
            {shareIcons}
          </div>

          {/* Blog Content */}
          <article
            sx={{ variant: "variants.markdown" }}
            dangerouslySetInnerHTML={{
              __html: html || "<p>No content available.</p>",
            }}
          />

          {/* Author Bio */}
          <AuthorBio />

          {/* Pagination Component */}
          {(previous || next) && (
            <Pagination previous={previous} next={next} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

const blogStyles = {
  blogContainer: {
    variant: "variants.container",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: ["20px", "40px", "60px", "80px", "100px"], // Full width with responsive padding
    maxWidth: "100%",
  },
  blogHead: {
    maxWidth: "80ch",
    textAlign: "center", // Center align the title and description
    h2: {
      color: "text",
      fontSize: [5, 5, 6],
    },
    p: {
      fontSize: 3,
      color: "muted",
      my: 3,
    },
    span: {
      fontSize: 2,
      color: "primary",
      display: "block",
    },
  },
  featuredImage: {
    maxWidth: "100%",
    mt: 4,
    mb: 6,
    borderRadius: "18px",
    height: "auto", // Allow dynamic height based on the image
    width: "100%", // Ensure the image takes full width of its container
  },
  shareIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    mt: 2,
  },
  tagsDiv: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    a: {
      color: "text",
      fontWeight: "600",
      fontSize: 2,
    },
  },
};
