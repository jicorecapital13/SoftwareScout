/** @jsx jsx */
import { jsx } from 'theme-ui'; // Importing Theme UI for styling
import Layout from '../components/layout'; // Assuming you have a layout component

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    bg: 'background',
    color: 'text',
    lineHeight: '1.8',
  },
  heading: {
    fontSize: [5, 6],  // Responsive font sizes
    color: 'primaryColor',
    mb: 4,
  },
  subHeading: {
    fontSize: [3, 4],  // Responsive font sizes
    color: 'secondaryColor',
    mb: 3,
  },
};

const AffiliateDisclosure = () => {
  return (
    <Layout>
      <div sx={styles.container}>
        <h1 sx={styles.heading}>Affiliate Disclosure</h1>

        <p>At <strong>SoftwareDiscoverer</strong>, transparency is important to us. In compliance with the Federal Trade Commission (FTC) guidelines, we want to disclose that some of the links on our website are affiliate links, and we may receive a small commission if you make a purchase through these links. This comes at no additional cost to you and helps support the ongoing operation of our website.</p>

        <h2 sx={styles.subHeading}>What are Affiliate Links?</h2>
        <p>Affiliate links are unique URLs provided by affiliate programs. When you click on one of these links and make a purchase, we earn a commission from the product or service provider. This does not affect the price you pay for the product or service.</p>

        <h2 sx={styles.subHeading}>Why We Use Affiliate Links</h2>
        <p>Our goal at <strong>SoftwareDiscoverer</strong> is to provide unbiased software reviews and recommendations. To keep our site running and free for our readers, we participate in affiliate marketing programs. This allows us to generate some revenue while maintaining the quality and integrity of our content.</p>

        <h2 sx={styles.subHeading}>Our Commitment to Honest Reviews</h2>
        <p>It’s important to note that the compensation we receive from affiliate links does not influence our opinions or recommendations. We review and recommend software based on its merits, features, usability, and value to our audience. Any compensation we earn helps us continue to create valuable content for you.</p>

        <h2 sx={styles.subHeading}>Affiliate Programs We Participate In</h2>
        <p><strong>SoftwareDiscoverer</strong> participates in various affiliate marketing programs. These include, but are not limited to:</p>
        <ul>
          <li>Software affiliate programs from product developers and vendors.</li>
          <li>Affiliate networks such as Amazon Associates or other third-party platforms.</li>
        </ul>

        <h2 sx={styles.subHeading}>Conclusion</h2>
        <p>We appreciate your support through the use of affiliate links. It allows us to continue providing in-depth software reviews and recommendations at no extra cost to you.</p>

        <p>If you have any questions about our affiliate relationships or the content on our website, please feel free to contact us at:</p>
        <p><strong>Email:</strong> [Insert Contact Email]</p>
      </div>
    </Layout>
  );
};

export default AffiliateDisclosure;
