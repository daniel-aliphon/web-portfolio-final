import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-section">
        <h2>
          {" "}
          DANIEL <span>ALIPHON</span>
        </h2>
        <br />
        <p> About | Resume | Projects | Contact</p>
        <p>
          <span>© 2023 Daniel Juan Aliphon, All Rights Reserved.</span>
        </p>
      </div>
      <div className="middle-section">
        <div className="flex">
          {" "}
          <div className="btnlink">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Maps, GPS</title>
              <path d="M15.92,15.23,18.35,11a7.27,7.27,0,0,0,0-7.35,7.35,7.35,0,0,0-12.72,0,7.27,7.27,0,0,0,0,7.35l2.43,4.21C4,15.71,0,17,0,19.5,0,22.59,6.22,24,12,24s12-1.41,12-4.5C24,17,20,15.71,15.92,15.23ZM7.37,4.67A5.34,5.34,0,1,1,16.62,10L12,18,7.38,10A5.31,5.31,0,0,1,7.37,4.67ZM12,22C5.4,22,2,20.25,2,19.5c0-.53,2.15-1.95,7.18-2.38l1.35,2.33a1.7,1.7,0,0,0,2.94,0l1.35-2.33C19.85,17.55,22,19,22,19.5,22,20.25,18.6,22,12,22Z" />
              <circle
                cx="12"
                cy="7"
                r="2"
              />
            </svg>
          </div>
          South Africa, Kwa-Zulu Natal
        </div>
        <div className="flex">
          {" "}
          <div className="btnlink">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          +27 71 098 8863
        </div>
        <div className="flex">
          {" "}
          <div className="btnlink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <a
            href="mailto:daniel.aliphon.juan@gmail.com"
            className="email-link"
          >
            daniel.aliphon.juan@gmail.com
          </a>
        </div>
      </div>
      <div className="right-section">
        Lorem ipsum dolor sit amet consectetur
        <br /> elit. Cumque fugiat, corporis voluptatem ?
        <br /> Lorem ipsum dolor sit amet consectetur
        <br /> elit. Cumque fugiat, corporis voluptatem ?<br /> Lorem ipsum
        dolor sit amet consectetur
        <br /> elit. Cumque fugiat, corporis voluptatem ?
      </div>
    </div>
  );
};
