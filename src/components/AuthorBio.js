import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AuthorBio = () => (
  <div className="entry-author entry-author-style-center" style={bioStyles.container}>
    <div className="entry-author-profile author-profile vcard">
      <div className="entry-author-avatar" style={bioStyles.avatarContainer}>
        <StaticImage
          alt="John - Software Scout"
          src="../images/profile-pic.jpg"
          width={80}
          height={80}
          className="avatar avatar-80 photo"
          loading="lazy"
          decoding="async"
          imgStyle={{ borderRadius: '50%' }}
        />
      </div>
      <b className="entry-author-name author-name fn" style={bioStyles.name}>
        John - Software Discoverer
      </b>
      <div className="entry-author-description author-bio" style={bioStyles.bio}>
        <p>
        I'm John, a software developer and digital marketing enthusiast. I create content to help aspiring creators, tech-savvy individuals, and entrepreneurs navigate the world of software and AI. With practical tutorials, honest reviews, and the latest insights, I make complex tools accessible, empowering you to innovate and grow in the digital landscape.
        </p>
      </div>
      <div className="entry-author-follow author-follow" style={bioStyles.socialIcons}>

        <a
          href="https://www.linkedin.com/in/johncoretana/"
          className="linkedin-link social-button"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow Software Scout on LinkedIn"
          aria-label="Follow John Coretana on LinkedIn"
        >
          <span className="kadence-svg-iconset">
            <svg
              className="kadence-svg-icon kadence-linkedin-svg"
              fill="currentColor"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="28"
              viewBox="0 0 24 28"
              aria-hidden="true"
            >
              <title>LinkedIn</title>
              <path d="M3.703 22.094h3.609v-10.844h-3.609v10.844zM7.547 7.906c-0.016-1.062-0.781-1.875-2.016-1.875s-2.047 0.812-2.047 1.875c0 1.031 0.781 1.875 2 1.875h0.016c1.266 0 2.047-0.844 2.047-1.875zM16.688 22.094h3.609v-6.219c0-3.328-1.781-4.875-4.156-4.875-1.937 0-2.797 1.078-3.266 1.828h0.031v-1.578h-3.609s0.047 1.016 0 10.844v0h3.609v-6.062c0-0.313 0.016-0.641 0.109-0.875 0.266-0.641 0.859-1.313 1.859-1.313 1.297 0 1.813 0.984 1.813 2.453v5.797zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
);

// Styles for the AuthorBio component
const bioStyles = {
  container: {
    textAlign: 'center',
    marginBottom: '40px', // Provide enough space between the bio and the pagination
  },
  avatarContainer: {
    marginBottom: '10px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  bio: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px', // Ensure there's spacing between bio and social icons
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default AuthorBio;
