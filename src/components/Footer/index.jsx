import './style.css'

const Footer = () => {
  return (
    <footer>
         <a
        href="https://www.youtube.com/channel/UCKdCUihF-6R1rZ7dvznxkkQ"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/youtube-icon.png`}
          alt="Youtube-icon"
        />
      </a>
      <a href="https://web.facebook.com/caleb.silvanus" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/facebook-icon.png`}
          alt="Facebook-icon"
        />
      </a>
      <a
        href=""
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/linkedin-icon.png`}
          alt="LinkIn-icon"
        />
      </a>
      <a href="https://twitter.com/Kalebnwachuks" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/twitter-icon.png`}
          alt="Twitter-icon"
        />
      </a>
    </footer>
  )
}

export default Footer