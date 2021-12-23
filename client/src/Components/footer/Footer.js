import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
            <div className="carda">
                <div className="row mb-4">
                    <div className="col-md-4 col-sm-11 col-xs-11">
                    <div className="footer-text pull-left">
                        <p className="card-text">TAWSILA est le premier réseau de voyage communautaire au monde. Où que vous alliez, en bus ou en covoiturage, trouvez le trajet idéal parmi notre large choix de destinations à petits prix.</p>
                        <div className="social mt-2 mb-3">
                            <ul class="sc-1omxqos-6 ewaOWt">
                            <li><a href="https://facebook.com/blablacar.fr" title="Lien vers www.facebook.com/blablacar.fr">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-3dofso-0 gVVdlM" width="36" height="36" aria-hidden="false">
                                        <title>facebook</title>
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#00AFF5" d="M12 0C5.37 0 0 5.4 0 12.07 0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07 24 5.41 18.63 0 12 0z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li><a href="https://twitter.com/BlaBlaCar_FR" title="Lien vers twitter.com/BlaBlaCar_FR">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-3dofso-0 gVVdlM" width="36" height="36" aria-hidden="false">
                                        <title>twitter</title>
                                        <path fill="#00AFF5" d="M22 6.167c-.75.333-1.5.583-2.333.666.833-.5 1.5-1.333 1.833-2.25-.833.5-1.667.834-2.583 1a4.034 4.034 0 0 0-3-1.333 4.09 4.09 0 0 0-4.084 4.083c0 .334 0 .667.084.917-3.5-.167-6.5-1.833-8.5-4.333C3 5.583 2.833 6.25 2.833 7c0 1.417.75 2.667 1.834 3.417-.667 0-1.334-.167-1.834-.5V10c0 2 1.417 3.667 3.25 4-.333.083-.666.167-1.083.167-.25 0-.5 0-.75-.084.5 1.667 2 2.834 3.833 2.834C6.667 18 4.917 18.667 3 18.667c-.333 0-.667 0-1-.084 1.833 1.167 4 1.834 6.25 1.834 7.583 0 11.667-6.25 11.667-11.667v-.5c.833-.583 1.5-1.333 2.083-2.083z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li><a href="https://youtube.com/c/BlaBlaCarFR" title="Lien vers www.youtube.com/c/BlaBlaCarFR">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-3dofso-0 gVVdlM" width="36" height="36" aria-hidden="false">
                                        <title>youtube</title>
                                        <path fill="#00AFF5" d="M21.833 8S21.667 6.583 21 6c-.75-.833-1.583-.833-2-.833C16.167 5 12 5 12 5s-4.167 0-7 .167C4.583 5.25 3.75 5.25 3 6c-.583.583-.833 2-.833 2S2 9.583 2 11.25v1.5c0 1.583.167 3.25.167 3.25s.166 1.417.833 2c.75.833 1.75.75 2.167.833C6.75 19 12 19 12 19s4.167 0 7-.25c.417-.083 1.25-.083 2-.833.583-.584.833-2 .833-2s.167-1.584.167-3.25v-1.5C22 9.583 21.833 8 21.833 8zM9.917 14.583V9l5.416 2.833-5.416 2.75z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li><a href="https://instagram.com/blablacarfr" title="Lien vers www.instagram.com/blablacarfr/">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-3dofso-0 gVVdlM" width="36" height="36" aria-hidden="false">
                                        <title>instagram</title><g fill-rule="nonzero">
                                        <path fill="#00AFF5" d="M12 3.802c2.67 0 2.987.01 4.042.058 1.137.052 2.193.28 3.005 1.092.813.813 1.042 1.869 1.092 3.008.05 1.053.059 1.37.059 4.04s-.009 2.987-.059 4.042c-.05 1.137-.279 2.193-1.091 3.005s-1.869 1.042-3.007 1.092c-1.055.05-1.372.059-4.042.059s-2.987-.009-4.042-.059c-1.137-.05-2.193-.279-3.005-1.091S3.91 17.178 3.86 16.04c-.05-1.055-.058-1.372-.058-4.042s.008-2.987.058-4.042c.05-1.137.28-2.193 1.092-3.005S6.82 3.91 7.958 3.86C9.013 3.81 9.33 3.802 12 3.802zM12 2c-2.717 0-3.057.012-4.123.06-1.625.075-3.052.473-4.199 1.618C2.533 4.825 2.133 6.252 2.06 7.877 2.012 8.943 2 9.285 2 12c0 2.717.012 3.057.06 4.123.075 1.625.472 3.053 1.618 4.199 1.146 1.146 2.574 1.544 4.199 1.618 1.066.048 1.408.06 4.123.06s3.057-.012 4.123-.06c1.625-.075 3.053-.472 4.199-1.618 1.146-1.146 1.544-2.574 1.618-4.199.048-1.066.06-1.408.06-4.123s-.012-3.057-.06-4.123c-.075-1.625-.472-3.053-1.618-4.199-1.147-1.145-2.574-1.545-4.199-1.618C15.057 2.012 14.715 2 12 2z"></path>
                                        <path fill="#00AFF5" d="M12 6.865a5.136 5.136 0 1 0 .001 10.271A5.136 5.136 0 0 0 12 6.865zm0 8.468a3.332 3.332 0 1 1 0-6.666 3.332 3.332 0 1 1 0 6.666z"></path>
                                        <circle fill="#00AFF5" fill-rule="nonzero" cx="17.338" cy="6.662" r="1.2"></circle></g>
                                    </svg>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-1 col-xs-1 mb-2" />
                    <div className="col-md-2 col-sm-4 col-xs-4">
                    <h5 className="heading">Services</h5>
                    <ul>
                        <li>Book services</li>
                        <li>Book rental</li>
                        <li>7 days available</li>
                        <li>Research</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                    <h5 className="heading">Building</h5>
                    <ul className="card-text">
                        <li>Open space</li>
                        <li>Smart Office</li>
                        <li>quiet </li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                    <h5 className="heading">Society</h5>
                    <ul className="card-text">
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Join Us</li>
                    </ul>
                    </div>
                </div>
                <div className="divider mb-2"/>
                <div className="row" style={{fontsize: '"10px'}}>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="pull-left">
                            <p>Tawsila, {new Date().getFullYear()} <i className="fa fa-copyright" /></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="pull-right mr-0 d-flex policy">
                            <div>Terms of Use</div>
                            <div>Privacy Policy</div>
                            <div>Cookie Policy</div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
  );
}

export default Footer;