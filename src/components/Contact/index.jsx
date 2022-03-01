import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070159.921825052!2d4.176782320106028!3d9.017357406184777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1645227817541!5m2!1sen!2sng"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>+234810000000</p>

      <h4>Email</h4>
      <p>email@grmail.com</p>

      <h4>Address</h4>
      <p>Nigeria</p>
    </div>
  );
};

export default About;