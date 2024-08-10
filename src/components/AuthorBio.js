import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AuthorBio = () => (
  <div className="entry-author entry-author-style-center">
    <div className="entry-author-profile author-profile vcard">
      <div className="entry-author-avatar">
        <StaticImage
          alt="John - Software Scout"
          src="../images/profile-pic.jpg" // Ensure this image exists in your project
          width={80}
          height={80}
          className="avatar avatar-80 photo"
          loading="lazy"
          decoding="async"
          imgStyle={{ borderRadius: '50%' }}
        />
      </div>
      <b className="entry-author-name author-name fn">John - Software Scout</b>
      <div className="entry-author-description author-bio">
        <p>
          I'm John, a tech enthusiast and software developer. I make content creation easier with insightful tutorials, reviews, and the latest updates in AI and software tools.
        </p>
      </div>
      <div className="entry-author-follow author-follow">
        <a
          href="https://twitter.com/SoftwareScout"
          className="twitter-link social-button"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow Software Scout on Twitter"
        >
          <span className="kadence-svg-iconset">
            <svg
              className="kadence-svg-icon kadence-twitter-svg"
              fill="currentColor"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="28"
              viewBox="0 0 26 28"
            >
              <title>Twitter</title>
              <path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
            </svg>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/SoftwareScout"
          className="linkedin-link social-button"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow Software Scout on LinkedIn"
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

export default AuthorBio;
