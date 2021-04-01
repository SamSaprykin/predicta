import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"



const TextBox = styled.div`
display: flex;
flex-direction: column;
width: 1000px;
margin: 0 auto;

@media (max-width: 1024px) {
  width: 80%

}
h4 {
  margin-bottom:24px;
}
h3 {
  font-size:24px;
}
table {
  margin-top:40px;
  tr {
    th {
      color:white;
      background-color:#222b3e;
      border:1px solid white;
      text-align:center;
      padding: 13px 17px; 
    }
    td {
      padding: 13px 17px; 
    }
  }
}
`
const Gap = styled.div`
height: 2rem;

  @media (max-width: 1024px) {
  
  }
`

const Terms = (props) => (
    <Layout location={props.location}>

<div className="row" id="first-section">
    <div className="col">
      
     <h1>Privacy Policy</h1>

     <Gap/>

  

      <TextBox>



      <h2>Website Privacy Policy</h2>
      <p>
        The website www.predicta.gr is owned by the company PREDICTA S.A. (hereinafter referred as the Company), 
        which acts as a Controller with regards to the personal data described below. The Company is the exclusive 
        administrator of the website in discussion and is responsible for the processing of the personal data you 
        submit, in accordance with the applicable General Data Protection Regulation (EU 2016/679 - GDPR).
      </p>  

      <h3>1. What is personal data?</h3>
      <p>
        According to Article 4(1) of the General Data Protection Regulation, ‘personal data’ means any information 
        relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person 
        is one who can be identified, directly or indirectly, in particular by reference to an identifier such as 
        a name, an identification number, location data, an online identifier or to one or more factors specific 
        to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural 
        person.
      </p>
      <h3>2. What personal data is collected and why?</h3>
      <p>
        In case the users of the website voluntarily provide their personal data (e.g. name, address, telephone 
        number or email address) via our communication form regarding our seminars, the Company shall process 
        them for the purpose of answering any of your inquiries on our seminars. mentioned below. Users may 
        decline to provide personal information; however, in this case, we may be unable to deliver the services 
        requested.
      </p>

      <h3>3. The lawful basis we use to process your data </h3>
      <p>
        Processing of your data is based on the following lawful bases of the performance of contract, your consent 
        or the compliance with a legal or regulatory obligation. 
      </p>
      <h3>4. Disclosure of information</h3>
      <p>
        Information about users of the website is not processed in any other manner than that described in the 
        present privacy policy. Information may be disclosed to law enforcement authorities without your consent 
        if required by law, following a reasonable request to prevent, investigate or act against actual or 
        suspected illegal activity, physical harm or financial loss, and if part or all of the company or its 
        assets are sold or transferred.

      </p>  
      <h3>5. Security</h3>
      <p>
        The information we collect is kept secure via the use of administrative, technical and physical safeguards 
        to protect it from loss, misuse, unauthorized access, disclosure or alteration.
        
      </p>  

      <h3>
        6. Third parties that process data for us
      </h3>

      <p>
        Your personal data are accessed only by the Company’s employees, which are bound by confidentiality clauses.
        We act on our own in the processing of the personal data we collect, while the recipients of your data might 
        be companies that cooperate with us for the purpose of manuscript setup, and the conversion of your manuscript 
        into xml files, or article databases and libraries.It should be mentioned that the Company does not transfer 
        your personal data outside of the EEA, nor does the Company proceed with the above-mentioned personal data 
        to any automated decision making.
      </p>

      <h3>7. When do we delete your data?</h3>
      <p>
        Your personal data are retained only for as long as it is required according to the terms of our contractual 
        relationship.
      </p>

      <h3>8. Your rights towards your personal data.</h3>
      <p>You can exercise your rights towards the processing of your personal data and specifically:</p>

      <ul>
        <li>
          Request access to your data
        </li>
        <li>
          Request the correction of your data, in cases where the data we hold about you are incorrect or insufficient
        </li>
        <li>
          Request to delete your data, if there is no legal obligation for us to keep them
        </li>
        <li>
          Withdraw your consent, in cases where consent is the lawful basis for the processing of your data
        </li>
        <li>
          Object to processing for a specific reason
        </li>
        <li>
          Request restriction of processing
        </li>
        <li>
          Request to transfer your data to another Controller
        </li>
        <li>
          You may exercise your rights, by sending an email addressed to: info@predicta.gr
        </li>
        <li>
          You will receive a response to your request within one (1) month of its receipt. If an extension of two (2) 
          months to respond to your request is required, considering the complexity and number of concurrent requests,
          we will inform you in due time.
        </li>
        <li>
          If you do not receive a response to your request, you have the right to lodge a complaint with the Data 
          Protection Authority of your residence.
        </li> 
      </ul>



      <h3>10. About this privacy policy</h3>
      <p>
        This privacy policy is updated periodically and without prior notice. We encourage you to frequently review 
        this policy so as to be informed about any possible changes with regard to processing of your personal data. 
        This site contains links to external sites that may have different privacy policies.
        
      </p>
      <p>
        For more information regarding our privacy policy, or for relevant questions or comments, please email 
        us at: info@predicta.gr
      </p>


      <h2>Cookie Declaration</h2>
      <p>
        This website uses cookies. We use cookies to personalize content and ads, to provide social media features 
        and to analyze our traffic. We also share information about your use of our site with our social media, 
        advertising and analytics partners who may combine it with other information that you have provided to 
        them or that they’ve collected from your use of their services.
        Cookies are small text files that can be used by websites to make a user's experience more efficient.
        The law states that we can store cookies on your device if they are strictly necessary for the operation 
        of this site. For all other types of cookies, we need your permission.
        This site uses different types of cookies. Some cookies are placed by third party services that appear on 
        our pages.
        You can at any time change or withdraw your consent from the Cookie Declaration on our website.
        Your consent applies to the following domains: www.predicta4covid.com
      </p>

      <h4>PERFORMANCE (1 COOKIE)</h4>
      <p>
        Performance cookies help website owners to understand how visitors interact with websites by collecting 
        and reporting information anonymously. 
      </p>
      
       
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Provider</th>
          <th>Purpose</th>
          <th>Expiry</th>
          <th>Type</th>
        </tr>
        </thead>   
        <tbody>
        <tr>
          <td>_ga</td>
          <td>Predicta4covid.com</td>
          <td>
            This cookie is installed by Google Analytics. The cookie is used to calculate 
            visitor, session, campaign data and keep track of site usage for the site's analytics 
            report. The cookies store information anonymously and assign a randomly generated number 
            to identify unique visitors.
          </td>
          <td>2 years</td>
          <td>Analytics</td>
        </tr>
        </tbody>
      </table>
      </TextBox>

    </div>
</div>


</Layout>
)

export default Terms