import './contact.css'
import mohamed from '../../images/mohamed.jpg'
const ContactPage = () => {
    return (<div>
        <div className="mohamed">
          <img src={mohamed} alt="mohamed" className="mohamed-image" />
          <h2 className="mohamed-name">name : mohamed abd elfattah sayed</h2>
        </div>
        <div className="contact">
          <div className="contact-wrapper">
            <div className="contact-item">
              <div className="contact-item-icon">
                <i className="bi bi-house-fill"></i>
                address
              </div>
              <p>egypt -beni-suef nasser-city</p>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
              <i className="bi bi-telephone-fill"></i>
                              phone
              </div>
              <p>01158487539</p>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
              <i className="bi bi-envelope-at"></i>
                              email address
              </div>
              <p>mohamedabdelfatah707@gmail.com</p>
            </div>
          </div>
        </div>
        </div>
      );
}
 
export default ContactPage;