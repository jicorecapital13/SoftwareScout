/** @jsx jsx */
import { jsx } from 'theme-ui'; // Importing Theme UI for styling (if you're using it)
import Layout from '../components/layout'; // Assuming you have a layout component

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div sx={styles.container}>
        <h1 sx={styles.heading}>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> [09/24/2024]</p> 

        <h2 sx={styles.subHeading}>1. Introduction</h2>
        <p>At SoftwareDiscoverer, we are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website or engage with our software reviews and blog content.</p>
        <p>By using our website, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please refrain from using our services.</p>

        <h2 sx={styles.subHeading}>2. Information We Collect</h2>
        <p>We collect two types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Information that can be used to identify you, such as your name, email address, and any other information you voluntarily provide when subscribing to our newsletter or leaving a comment.</li>
          <li><strong>Non-Personal Information:</strong> Data that cannot be used to identify you, including but not limited to browser type, language preference, referring site, and the date and time of each visitor request.</li>
        </ul>

        <h2 sx={styles.subHeading}>3. How We Use Your Information</h2>
        <p>We use the collected information in the following ways:</p>
        <ul>
          <li>To personalize your experience on our website.</li>
          <li>To improve our website and services based on your feedback.</li>
          <li>To send periodic emails, such as newsletters or updates, if you have subscribed to them.</li>
          <li>To respond to inquiries or comments submitted by you.</li>
          <li>To monitor and analyze trends and usage patterns.</li>
        </ul>

        <h2 sx={styles.subHeading}>4. Cookies and Tracking Technologies</h2>
        <p>We use cookies to enhance your experience. Cookies are small files stored on your computer that allow us to recognize you on future visits, tailor content to your preferences, and analyze website traffic. You may choose to disable cookies via your browser settings, but this may limit your ability to use certain features of our website.</p>

        <h2 sx={styles.subHeading}>5. Third-Party Services</h2>
        <p>We may use third-party service providers to assist us in operating the website or conducting business. These third parties have access to your information solely to perform these tasks on our behalf and are obligated to maintain the confidentiality of your information.</p>
        <p>Examples of third-party services include:</p>
        <ul>
          <li>Analytics services to track and report on website traffic.</li>
          <li>Email services to send newsletters and updates to subscribers.</li>
          <li>Advertising networks that may use cookies to serve personalized ads based on your browsing history.</li>
        </ul>

        <h2 sx={styles.subHeading}>6. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is entirely secure, and we cannot guarantee absolute security.</p>

        <h2 sx={styles.subHeading}>7. Links to Other Websites</h2>
        <p>Our website may contain links to other websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any external sites you visit.</p>

        <h2 sx={styles.subHeading}>8. Children’s Privacy</h2>
        <p>Our website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we may have collected information from a child under 13, please contact us, and we will promptly remove such information from our records.</p>

        <h2 sx={styles.subHeading}>9. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>

        <h2 sx={styles.subHeading}>10. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or the practices of our website, please contact us at:</p>
        <p>Email: [contact@softwarediscoverer.com]<br/>Address: [1650 borel place, San Mateo, CA, USA]</p> 
      </div>
    </Layout>
  );
};

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

export default PrivacyPolicy;
