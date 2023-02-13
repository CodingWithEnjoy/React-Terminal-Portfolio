import { Command } from "../../styles/common";
const About = () => {
  return (
    <>
      <p data-testid="About">
        <strong>Hi !</strong> My Name Is Amirmasoud
      </p>
      <p>
        I'm A <strong>Full Stack Developer</strong> Currently Working From Home
      </p>
      <p>
        If you liked this project and would like to take a look at the source
        code or contact me, use the <Command>source</Command>,
        <Command>social</Command> or
        <Command>connect "socialMedia"</Command> commands
      </p>
      <p>
        In case you have any doubts on the commands, type
        <Command>help</Command> to display a list of commands and their
        description
      </p>
    </>
  );
};

export default About;
