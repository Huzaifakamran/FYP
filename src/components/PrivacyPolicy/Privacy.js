import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header-footer/FixedHeader';
import Footer from '../header-footer/Footer';
import SearchByEmail from '../SearchByEmail/index';
class Privacy extends Component {
    render() {
        return (
           <div>
           <Header/>
                <div style={{textAlign:'center'}}>
                <br/>
                    <h1>Privacy Policy</h1>
                </div>
                <br/>
                <div style={{marginLeft:"200px",marginRight:"200px"}}>

                 <p>This page informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our Service and the choices you have
                associated with that data. 
                
                We use your data to provide and improve the Service. By using the Service, you
                agree to the collection and use of information in accordance with this policy.
                Unless otherwise defined in this Privacy Policy, the terms used in this
                Privacy Policy have the same meanings as in our Terms and Conditions,
                accessible from www.venueclub.pk
                </p>
                

                
                    
                        <h5>Service</h5>

                            <p>Service is the www.venueclub.pk website operated by venueclub</p>

                        <h5>Personal Data</h5>

                            <p>Personal Data means data about a living individual who can be identified
                            from those data (or from those and other information either in our
                            possession or likely to come into our possession).
                            </p>

                        <h5>Usage Data</h5>

                            <p>Usage Data is data collected automatically either generated by the use of
                            the Service or from the Service infrastructure itself (for example, the
                            duration of a page visit).
                            </p>

                        <h5>Cookies</h5>
                                <p>Cookies are small files stored on your device (computer or mobile device).</p>
                  <br/>
                        <h5><b>Information Collection and Use :</b></h5>

                        <p>We collect several different types of information for various purposes to
                        provide and improve our Service to you.
                        </p>

                        <br/>

                    <h5><b>Types of Data Collected:</b></h5>

                        <h5>Personal Data</h5>

                                <p>While using our Service, we may ask you to provide us with certain personally
                                identifiable information that can be used to contact or identify you
                                ("Personal Data"). Personally identifiable information may include, but is not
                                limited to:
                                Email address,
                                First name and last name,
                                Phone number,
                                Cookies and Usage Data.
                                </p>
                        <h5>Usage Data</h5>

                                <p>We may also collect information how the Service is accessed and used ("Usage
                                Data"). This Usage Data may include information such as your computer's
                                Internet Protocol address (e.g. IP address), browser type, browser version,
                                the pages of our Service that you visit, the time and date of your visit, the
                                time spent on those pages, unique device identifiers and other diagnostic
                                data.
                                </p>

                        <h5>Tracking Cookies Data</h5>

                                <p>We use cookies and similar tracking technologies to track the activity on our
                                Service and we hold certain information.
                                
                                Cookies are files with a small amount of data which may include an anonymous
                                unique identifier. Cookies are sent to your browser from a website and stored
                                on your device.
                                You can instruct your browser to refuse all cookies or to indicate when a
                                cookie is being sent. However, if you do not accept cookies, you may not be
                                able to use some portions of our Service.
                                </p>

                        <h5>Examples of Cookies we use</h5>

                            <p><ul>
                            <li>Session Cookies. We use Session Cookies to operate our Service.</li>
                            <li>Preference Cookies. We use Preference Cookies to remember your preferences
                            and various settings.
                            <li>Security Cookies. We use Security Cookies for security purposes.</li>
                            </li>
                            </ul></p>

                        <h5>Use of Data </h5>

                            <p>venueclub uses the collected data for various purposes:
                            <ul>
                            <li>To provide and maintain the Service</li>
                            <li>To notify you about changes to our Service</li>
                            <li>To allow you to participate in interactive features of our Service when
                            you choose to do so</li>
                            <li>To provide customer care and support</li>
                            <li>To provide analysis or valuable information so that we can improve the</li>
                            </ul>
                            </p>

                        <h5>Service</h5>

                            <p>
                            <ul>
                            <li>To monitor the usage of the Service</li>
                            <li>To detect, prevent and address technical issues</li>
                            </ul>
                            </p>

                        <h5>Transfer Of Data </h5>

                            <p>Your consent to this Privacy Policy followed by your submission of such
                            information represents your agreement to that transfer.
                            venueclub will take all steps reasonably necessary to ensure that your data is
                            treated securely and in accordance with this Privacy Policy and no transfer of
                            your Personal Data will take place to an organization or a country unless
                            there are adequate controls in place including the security of your data and
                            other personal information.
                            </p>

                        <h5>Disclosure Of Data</h5>
                                <h6>Legal Requirements</h6>

                                    <p>venueclub may disclose your Personal Data in the good faith belief that such
                                    action is necessary to:
                                    <ul>
                                    <li>To comply with a legal obligation</li>
                                    <li>To comply with a legal obligation</li>
                                    <li>To comply with a legal obligation</li>
                                    <li>To protect the personal safety of users of the Service or the public</li>
                                    <li>To protect against legal liability</li>
                                    </ul>
                                    </p>

                        <h5>Security of Data</h5>

                            <p>The security of your data is important to us but remember that no method of
                            transmission over the Internet or method of electronic storage is 100% secure.
                            While we strive to use commercially acceptable means to protect your Personal
                            Data, we cannot guarantee its absolute security.
                            </p>

                        <h5>Children's Privacy</h5>

                            <p>Our Service does not address anyone under the age of 18 ("Children").
                            We do not knowingly collect personally identifiable information from anyone
                            under the age of 18. If you are a parent or guardian and you are aware that
                            your Child has provided us with Personal Data, please contact us. If we become
                            aware that we have collected Personal Data from children without verification
                            of parental consent, we take steps to remove that information from our
                            servers.
                            </p>

                        <h5>Contact Us</h5>

                            <p>If you have any questions about this Privacy Policy, please contact us:
                            </p>
            

                </div>

                <br/>
                <br/>
                <SearchByEmail/>
                <br/>
               <Footer/>
            </div>
           
           
        );
    }
}

export default Privacy;