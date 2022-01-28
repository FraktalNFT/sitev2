import React from 'react';

const DownloadButton = ({ groupType, buttonType }) => {
    return (
        <div className={`download-button-group ${groupType}`}>
            <a href="https://docs.fraktal.io/" target="_blank" className={`download-button download-button-google ${buttonType}`}>
                <div className="download-button-inner">
                    <div className="download-button-icon c-purple">
                        <i className="fas fa-hat-wizard"></i>
                    </div>
                    <div className="download-button-content">
                        <h5 className="c-grey upper ls-1">Explore</h5>
                        <h3 className="c-dark ls-2">Docs</h3>
                    </div>
                </div>
            </a>
            <a href="https://discord.com/invite/P6fCPvtZtq" target="_blank" className={`download-button download-button-apple ${buttonType}`}>
                <div className="download-button-inner">
                    <div className="download-button-icon c-pink">
                        <i className="fab fa-discord"></i>
                    </div>
                    <div className="download-button-content">
                        <h5 className="c-grey upper ls-1">Join Community</h5>
                        <h3 className="c-dark ls-2">Discord</h3>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default DownloadButton;
