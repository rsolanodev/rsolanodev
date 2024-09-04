import {
  IconGithub,
  IconLinkedin,
  IconEmail,
  IconTwitter,
  IconInstagram,
} from "@/components/icons";

const Social = () => {
  return (
    <div className="Networks container flex justify-between items-center">
      <a href="https://github.com/rsolanodev" target="_blank">
        <IconGithub />
      </a>
      <a href="https://www.linkedin.com/in/rsolanoweb/" target="_blank">
        <IconLinkedin />
      </a>
      <a href="https://twitter.com/rsolanx" target="_blank">
        <IconTwitter />
      </a>
      <a href="https://www.instagram.com/rsolano.dev/" target="_blank">
        <IconInstagram />
      </a>
      <a href="mailto:rubensoljim@gmail.com" target="_blank">
        <IconEmail />
      </a>
    </div>
  );
};

export default Social;
