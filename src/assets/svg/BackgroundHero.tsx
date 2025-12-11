import React from "react";

interface BackgroundHeroProps {
    children?: React.ReactNode;
}

const BackgroundHero: React.FC<BackgroundHeroProps> = ({ children }) => {
    return (
        <div className="background-hero">
            <svg
                className="desktop"
                width={491}
                height={647}
                viewBox="0 0 491 647"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 10C0 4.47716 4.47715 0 10 0H481C486.523 0 491 4.47715 491 10V637C491 642.523 486.523 647 481 647H10C4.47716 647 0 642.523 0 637V10Z"
                    fill="black"
                />
                <circle cx={445.5} cy={598.5} r={134.5} fill="#1A1A1A" />
                <circle cx={352} cy={507} r={69} fill="#484848" fillOpacity={0.5} />
            </svg>
             <svg
              className="mobile"
              width={330}
              height={397}
              viewBox="0 0 310 397"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5C0 2.23858 2.23858 0 5 0H305C307.761 0 310 2.23858 310 5V392C310 394.761 307.761 397 305 397H5C2.23857 397 0 394.761 0 392V5Z"
                fill="black"
              />
              <circle cx={355.5} cy={415.5} r={134.5} fill="#1A1A1A" />
              <circle cx={258} cy={318} r={28} fill="#484848" fillOpacity={0.5} />
            </svg>

            <div className="background-hero__content">
                {children}
            </div>
        </div>
    );
};

export default BackgroundHero;

