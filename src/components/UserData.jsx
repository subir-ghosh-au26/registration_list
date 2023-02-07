import React from "react";
import bipard from "../asset/BIPARD.jpg";
import resData from "../asset/data";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function UserData(){
    return(
      <>
        {resData.map((data) => {
            return(
            <div className="document">
          <img src={bipard} alt="" width="150" height="150" />
          <h2>बिहार लोक प्रशासन और ग्रामीण विकास संस्थान</h2>
          <h2>Bihar Institute Of Public Administration & Rural Development</h2>
          <h3>Gaya</h3>
          <h5>REGISTRATION FORM</h5>
          <h3>पंजीकरण प्रपत्र</h3>
          <p>
            बिहार पशु चिकित्स्क पदाधिकारियों के आवासीय सांस्थिक प्रशिक्षण कायर्क्रम!
          </p>
          <p>
            INSTITUTIONAL TRAINING PROGRAMME (RESIDENTIAL) FOR NEWLY APPOINTED
            OFFICER OF BIHAR VETERINARY SERVICE
          </p>
          <table>
            <tbody>       
            <tr>
              <td>Sl No.</td>
              <td colSpan="3">&nbsp;</td>
              <td className="photo" rowSpan="3">
              <LazyLoadImage src={data.Photo}/>
                {/* <img src={data.Photo} alt='' width='170px' height='125px'/> */}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                नाम
                <br />
                Name
              </td>
              <td colSpan="2">{data.Name}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ईमेल<br />Email</td>
              <td colSpan="2">{data.Email}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mobile No</td>
              <td>{data.Mobile_Number}</td>
              <td>Emergency Contact No.</td>
              <td>{data.Emergency_Contact_Number}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                पदनाम
                <br />
                Designation
              </td>
              <td>{data.Designation}</td>
              <td>
                शामिल होने की तिथि
                <br />
                Date of Joining
              </td>
              <td>{data.Date_of_Joining}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                विभाग
                <br />
                Department
              </td>
              <td colSpan="3">{data.Department}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                वेतनमान
                <br />
                Salary
              </td>
              <td>{data.Salary}</td>
              <td>
                मूल वेतन
                <br />
                Grade Pay
              </td>
              <td>{data.Grade_Pay}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                जन्म तिथि
                <br />
                Date of Birth
              </td>
              <td colSpan="3">{data.Date_of_Birth}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                लिंग
                <br />
                Sex
              </td>
              <td colSpan="3">{data.Gender}</td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                वैवाहिक स्थिति
                <br />
                Marital Status
              </td>
              <td colSpan="3">{data.Marital_Status}</td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                श्रेणी
                <br />
                Category
              </td>
              <td colSpan="3">{data.Category}</td>
            </tr>
            <tr>
              <td>11</td>
              <td>
                कार्यालय का पता (पिन कोड सहित)
                <br />
                Official Address (With PIN Code)
              </td>
              <td colSpan="3">{data.Official_Address_With_PIN_Code}</td>
            </tr>
            <tr>
              <td>12</td>
              <td>
                आवासीय पता (पिन कोड सहित)
                <br />
                Residential Address (With PIN Code)
              </td>
              <td colSpan="3">{data.Residential_Address_With_PIN_Code}</td>
            </tr>
            <tr>
              <td>13</td>
              <td>
                शैक्षणिक योग्यता
                <br />
                Educational Qualification
              </td>
              <td colSpan="3">{data.Educational_Qualification}</td>
            </tr>
            <tr>
              <td>14</td>
              <td>
                कार्य अनुभव
                <br />
                Work Experience
              </td>
              <td colSpan="3">{data.Work_Experience}</td>
            </tr>
            <tr>
              <td>15</td>
              <td>
                क्या आपको कंप्यूटर का ज्ञान है
                <br />
                Do You have Computer Knowledge
              </td>
              <td colSpan="3">{data.Do_You_have_Computer_Knowledge}</td>
            </tr>
            <tr>
              <td>16</td>
              <td>
                प्रशिक्षण अनुभव
                <br />
                Training Experience
              </td>
              <td colSpan="3">{data.Training_Experience}</td>
            </tr>
            <tr>
              <td>17</td>
              <td>
                अन्य तकनीकी योग्यता
                <br />
                Other Technical Qualification (if any)
              </td>
              <td colSpan="3">{data.Other_Technical_Qualification}</td>
            </tr>
            </tbody>
          </table>
          <div className="footer">
          <div className="date">
            <span className="left left1">दिनांक</span>
            <br />
            <span className="left">Date:   {data.Date}</span>
          </div>
          <div className="sign">
            <p className="right"><img src={data.Signature} alt='' width="300px" height="70px" /></p>
            <p className="right">
              प्रतिभागी का हस्ताक्षर
              <br />
              Signature of Participant
            </p>
          </div>
          
          </div>
          </div>
          )
        })}
      </>

    )
}
export default UserData;