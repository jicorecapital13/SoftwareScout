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

const Disclaimer = () => {
  return (
    <Layout>
      <div sx={styles.container}>
        <h1 sx={styles.heading}>Disclaimer for SoftwareDiscoverer</h1>
        <p>The information provided on <strong>SoftwareDiscoverer</strong> (the "Website") is for general informational purposes only. While we strive to ensure that the information provided is accurate, complete, and up-to-date, we make no warranties or representations of any kind, express or implied, regarding the accuracy, reliability, suitability, or availability of the Website or the information, products, services, or related graphics contained on the Website for any purpose. Any reliance you place on such information is strictly at your own risk.</p>

        <h2 sx={styles.subHeading}>1. No Professional Advice</h2>
        <p>The content on <strong>SoftwareDiscoverer</strong> is for informational and educational purposes only. It is not intended to serve as professional or expert advice. For specific advice related to your individual situation, please consult with a qualified professional. We are not responsible for any decisions made based on the information provided on this Website.</p>

        <h2 sx={styles.subHeading}>2. Affiliate Links and Sponsored Content</h2>
        <p><strong>SoftwareDiscoverer</strong> may participate in affiliate marketing programs, and some of the links on this Website may be affiliate links. This means that we may earn a small commission if you purchase a product or service through these links, at no additional cost to you. We may also receive compensation for sponsored content, but all opinions and reviews on this Website are our own, and we strive to maintain objectivity and transparency.</p>

        <h2 sx={styles.subHeading}>3. No Warranties</h2>
        <p>The Website and its content are provided on an "as is" and "as available" basis. <strong>SoftwareDiscoverer</strong> makes no warranties of any kind, whether express or implied, as to the operation of the Website, the accuracy or completeness of the information provided, or the products or services reviewed. To the fullest extent permitted by law, <strong>SoftwareDiscoverer</strong> disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.</p>

        <h2 sx={styles.subHeading}>4. External Links</h2>
        <p>Our Website may contain links to external websites that are not provided or maintained by <strong>SoftwareDiscoverer</strong>. We do not have control over these third-party sites and are not responsible for their content, privacy policies, or practices. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.</p>

        <h2 sx={styles.subHeading}>5. Limitation of Liability</h2>
        <p>In no event will <strong>SoftwareDiscoverer</strong> or its owners, affiliates, partners, or employees be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this Website.</p>

        <h2 sx={styles.subHeading}>6. User Responsibility</h2>
        <p>It is the responsibility of the Website visitor to ensure that any software, products, or services reviewed on <strong>SoftwareDiscoverer</strong> meet their needs before making any purchasing decisions. We recommend thoroughly researching software and services before committing to any purchases.</p>

        <h2 sx={styles.subHeading}>7. Changes to the Disclaimer</h2>
        <p>We reserve the right to modify or update this Disclaimer at any time without prior notice. Any changes will be effective immediately upon posting on the Website. We encourage you to check this page regularly to stay informed of any updates.</p>

        <h2 sx={styles.subHeading}>8. Contact Us</h2>
        <p>If you have any questions or concerns regarding this Disclaimer, please contact us at:</p>
        <p><strong>Email:</strong> [contact@SoftwareDiscoverer.com]</p>
      </div>
    </Layout>
  );
};

export default Disclaimer;
