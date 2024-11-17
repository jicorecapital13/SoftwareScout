/** @jsx jsx */
import { jsx } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Site from '../util/site.json';

const AboutPage = () => (
  <Layout showColorModeToggle={false}>
    <Seo 
      title={Site.title} 
      description="Learn more about Software discoverer and our mission to enhance your content creation and tech skills." 
    />
    <main sx={styles.container}>
      <section sx={styles.aboutSection}>
        <div sx={styles.aboutImage}>
          <StaticImage
            src="../images/profile-pic.jpg"
            alt="Profile Picture"
            layout="fixed"
            width={250}
            height={250}
            placeholder="blurred"
            imgStyle={{ borderRadius: '50%' }}
          />
        </div>
        <div sx={styles.aboutText}>
          <h1 sx={styles.title}>Hey there, I'm John, and welcome to Software Discoverer!</h1>
          <p sx={styles.description}>
          At Software Discoverer, we help digital creators, entrepreneurs, and tech enthusiasts unlock the potential of today's leading software and AI tools. Our mission is to simplify technology through easy-to-follow tutorials, insightful guides, and practical resources, empowering you to stay productive, creative, and ahead of the curve in the digital world.
          </p>
          <p sx={styles.description}>
            We offer insightful guides on software, effective content creation strategies, and the latest advancements in generative AI. Whether you are a blogger, YouTuber, or developer, our content is designed to enhance your skills and boost productivity while maintaining high standards of creativity and quality.
          </p>
          <div sx={styles.ctaButtons}>
            <a className="cta-button" href="/" sx={styles.ctaButton}>
              Join Our Newsletter
            </a>
            <a className="cta-button" href="https://www.youtube.com/channel/UCpGT2YhoxmJaKWPOsA5Ia_A" target="_blank" rel="noopener noreferrer" sx={styles.ctaButton}>
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default AboutPage;

const styles = {
  container: {
    variant: 'variants.container',
    maxWidth: '1200px',
    mx: 'auto',
    px: [3, 4],
    py: [3, 4],
  },
  title: {
    color: 'text',
    fontSize: [4, 5, 6],
    fontWeight: 'bold',
    mb: [3, 4],
    textAlign: 'center',
  },
  description: {
    color: 'muted',
    fontSize: [2, 3, 4],
    fontStyle: 'italic',
    lineHeight: '1.5',
    mb: [4, 5],
    textAlign: 'center',
  },
ctaButtons: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 3,
  mt: [4, 5],
},
ctaButton: {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: [3, 4],
  py: [2, 3],
  fontSize: [1, 2],
  fontWeight: 'bold',
  color: 'white', // White text by default
  bg: '#A31933', // Red background color
  borderRadius: '8px', // Rounded corners for a consistent look
  textDecoration: 'none',
  transition: 'background-color 0.3s ease, transform 0.2s ease, color 0.3s ease',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
  '&:hover': {
    bg: 'darkred', // Slightly darker red on hover
    color: 'blue', // Font turns blue on hover
    transform: 'translateY(-2px)', // Lift effect
  },
},

  aboutImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mb: [4, 5],
  },
  aboutText: {
    textAlign: 'center',
    maxWidth: '800px',
    mx: 'auto',
  },
  aboutSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: [3, 4],
    py: [4, 5],
  },
};
