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

const TermsConditions = () => {
  return (
    <Layout>
      <div sx={styles.container}>
        <h1 sx={styles.heading}>Terms and Conditions for SoftwareDiscoverer</h1>
        <p><strong>Effective Date:</strong> [Insert Date]</p>

        <h2 sx={styles.subHeading}>1. Use of Website</h2>
        <p>You agree to use the Website in accordance with these Terms and all applicable laws and regulations. You are prohibited from using the Website in a way that could harm the Website or its users or violate any law.</p>
        <p>We reserve the right to modify, suspend, or discontinue any part of the Website at any time without prior notice.</p>

        <h2 sx={styles.subHeading}>2. Intellectual Property Rights</h2>
        <p>The content, layout, design, data, databases, and graphics on this Website are protected by copyright and other intellectual property laws. You may view, download, and print material from the Website for your personal, non-commercial use, provided that you retain all copyright and proprietary notices. Any unauthorized use of the materials on this Website is strictly prohibited.</p>

        <h2 sx={styles.subHeading}>3. User-Generated Content</h2>
        <p>You may be permitted to submit comments or other content ("User Content") on the Website. By submitting User Content, you grant <strong>SoftwareDiscoverer</strong> a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, distribute, and display the User Content.</p>
        <p>You are responsible for ensuring that any User Content you provide does not violate the rights of any third party or any applicable law. We reserve the right to remove any User Content that violates these Terms or that we deem inappropriate.</p>

        <h2 sx={styles.subHeading}>4. Affiliate Links and Sponsored Content</h2>
        <p>Our Website may contain affiliate links, which means that we may earn a commission if you make a purchase through those links. We may also feature sponsored content. These sources of income do not influence our reviews or the integrity of the content we provide.</p>

        <h2 sx={styles.subHeading}>5. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, <strong>SoftwareDiscoverer</strong> shall not be liable for any direct, indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of your use or inability to use the Website or the content on it.</p>

        <h2 sx={styles.subHeading}>6. External Links</h2>
        <p>The Website may contain links to external websites that are not owned or controlled by <strong>SoftwareDiscoverer</strong>. We are not responsible for the content, privacy policies, or practices of these third-party sites. You agree that your use of any linked websites is at your own risk.</p>

        <h2 sx={styles.subHeading}>7. Disclaimers</h2>
        <p>The content on the Website is provided for general informational purposes only. We make no warranties or representations about the accuracy, reliability, or completeness of the content. The use of the Website and the information contained herein is at your own risk.</p>
        <p><strong>SoftwareDiscoverer</strong> does not guarantee that the Website will be available at all times or that it will be free from errors, viruses, or other harmful components.</p>

        <h2 sx={styles.subHeading}>8. Changes to the Terms</h2>
        <p>We reserve the right to change or update these Terms at any time. Any changes will be effective immediately upon posting on this page, and your continued use of the Website after such changes constitutes your acceptance of the new Terms.</p>

        <h2 sx={styles.subHeading}>9. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes arising from or in connection with the use of this Website shall be subject to the exclusive jurisdiction of the courts located in [Insert Jurisdiction].</p>

        <h2 sx={styles.subHeading}>10. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p><strong>Email:</strong> [Insert Contact Email]</p>
      </div>
    </Layout>
  );
};

export default TermsConditions;
