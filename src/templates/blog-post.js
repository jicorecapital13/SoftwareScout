/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import AuthorBio from "../components/AuthorBio"; // Import AuthorBio component
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

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
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

const blogPrefix = `/blog/`;

// Pagination
const Pagination = (props) => (
  <div sx={{ variant: "variants.pagination" }}>
    <ul>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        <li>
          <Link
            to={blogPrefix + slugify(`${props.previous.frontmatter.title}`)}
            rel="prev"
          >
            <p>{props.previous.frontmatter.title}</p>
            <span>&larr; Previous</span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li>
          <Link
            to={blogPrefix + slugify(`${props.next.frontmatter.title}`)}
            rel="prev"
          >
            <p>{props.next.frontmatter.title}</p>
            <span>Next &rarr;</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
);

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const pageURL =
    SiteMeta.meta.siteUrl + blogPrefix + slugify(`${frontmatter.title}`);

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : "";

  const { previous, next } = pageContext;
  let props = {
    previous,
    next,
  };

  // share icons in blog post
  const shareIcons = (
    <div sx={blogStyles.shareIcons}>
      <FacebookShareButton url={pageURL}>
        <FacebookIcon
          size={32}
          borderRadius="6"
          iconFillColor="#fff"
          bgStyle={{ fill: "#3b5998" }} // Updated to Facebook blue
        />
      </FacebookShareButton>

      <TwitterShareButton url={pageURL}>
        <TwitterIcon
          size={32}
          borderRadius="6"
          iconFillColor="#fff"
          bgStyle={{ fill: "#1da1f2" }} // Updated to Twitter blue
        />
      </TwitterShareButton>

      <LinkedinShareButton url={pageURL}>
        <LinkedinIcon
          size={32}
          borderRadius="6"
          iconFillColor="#fff"
          bgStyle={{ fill: "#0077b5" }} // Updated to LinkedIn blue
        />
      </LinkedinShareButton>

      <TelegramShareButton url={pageURL}>
        <TelegramIcon
          size={32}
          borderRadius="6"
          iconFillColor="#fff"
          bgStyle={{ fill: "#0088cc" }} // Updated to Telegram blue
        />
      </TelegramShareButton>

      <WhatsappShareButton url={pageURL}>
        <WhatsappIcon
          size={32}
          borderRadius="6"
          iconFillColor="#fff"
          bgStyle={{ fill: "#25D366" }} // Updated to WhatsApp green
        />
      </WhatsappShareButton>

      <EmailShareButton url={pageURL}>
        <EmailIcon
          size={32}
          borderRadius="6"
          iconFillColor="#fff"
          bgStyle={{ fill: "#7f7f7f" }} // Updated to a neutral color for email
        />
      </EmailShareButton>
    </div>
  );

  // tag's in blog post
  const tagLabel = frontmatter.tags.map((tag) => {
    return tag === "none" ? (
      ""
    ) : (
      <Link key={tag} to={`/tag/` + slugify(`${tag}`)} sx={{ fontSize: 2 }}>
        − {tag}
      </Link>
    );
  });

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        article={true}
      />
      <div sx={blogStyles.blogContainer}>
        <div>
          {/* ---------- Head of the blog  ---------- */}
          <section>
            <div sx={blogStyles.blogHead}>
              <h2>{frontmatter.title}</h2>
              <p>{frontmatter.description}</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                {tagLabel.length > 0 && <div sx={blogStyles.tagsDiv}>{tagLabel}</div>}
                <span>{frontmatter.date}</span>
              </div>
            </div>
            {Image && (
              <GatsbyImage
                image={Image}
                alt={frontmatter.title + " - Featured image"}
                className="featured-image"
                sx={blogStyles.featuredImage}
              />
            )}
          </section>

          {/* ---------- Tags and Share  ---------- */}
          <div>
            <h3>Share:</h3>
            {shareIcons}
          </div>

          {/* ---------- Article  ---------- */}
          <article
            sx={{ variant: "variants.markdown" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* ---------- Author Bio  ---------- */}
          <AuthorBio />

          {/* ---------- Pagination  ---------- */}
          {(previous || next) && <Pagination {...props} />}
        </div>
      </div>
    </Layout>
  );
};

export default Post;

const blogStyles = {
  blogContainer: {
    variant: "variants.container",
    px: ["20px", "60px", "160px", "220px", "280px"],
  },
  blogHead: {
    maxWidth: "70ch",
    h2: {
      color: "black",
      fontSize: [5, 5, 6],
    },
    p: {
      fontSize: 3,
      color: "mutedColor",
      my: 3,
    },
    span: {
      fontSize: 2,
      color: "primaryColor",
      display: "block",
    },
  },
  featuredImage: {
    maxWidth: "100%",
    mt: 4,
    mb: 6,
    borderRadius: "18px",
    height: "500px !important",
  },

  shareIcons: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    mt: 2,
  },

  tagsDiv: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    a: {
      color: "black",
      fontWeight: "600",
      fontSize: 2,
    },
  },
};
