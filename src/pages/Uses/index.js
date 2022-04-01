import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'components/ProjectLayout';
import Link from 'components/Link';
import usesBackground from 'assets/uses-background.mp4';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import prerender from 'utils/prerender';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import './index.css';
import { Table, TableCell, TableRow } from 'components/Table';

const Uses = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>Skills | Jesse Chung</title>
        <meta
          name="description"
          content="A list of hardware and software I use to do my thing"
        />
      </Helmet>
      <ProjectContainer className="uses">
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
          entered={!prerender}
        />
        <ProjectHeader
          title="Skills and uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things."
        />
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Skills</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    C#, Python, HTML, CSS, SQL, JavaScript, JAVA                    
                  </li>
                  <li>
                    Full-stack development, Scrum, cloud service, database, unit testing, RESTful API, blockchain
                  </li>
                  <li>
                    Azure, Git, Linux, Visual Studio, AWS, SQL server
                  </li>
                  <li>
                    Creativity, leadership, problem solving
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor and IDE.
                  </li>
                  <li>
                    My most professional cloud service is <Link href="https://azure.microsoft.com/en-us/">Azure</Link>, 
                    and then is <Link href="https://aws.amazon.com/">AWS</Link>.</li>
                  <li>
                    I like to use Microsoft <Link href="https://dotnet.microsoft.com/en-us/">.Net</Link> platform to develop web services; 
                    .NET MVC is a very concise design pattern.
                  </li>
                  <li>
                  <Link href="https://www.microsoft.com/en-us/edge/business">Microsoft edge</Link> {' '}
                  is my main browser for both development and general use.
                  </li>
                  <li>
                    Currently, I choose to learn to <Link href="https://reactjs.org/">React</Link> as my frontend
                    Javascript library. The component-centric mental model is
                    the first thing that truly made sense to me as a developer.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableRow>
                  <TableCell>
                    <strong>Mac</strong>
                  </TableCell>
                  <TableCell>2021 MacBook Pro 13 - Intel</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Laptop</strong>
                  </TableCell>
                  <TableCell>ASUS - ROG Zephyrus M16 GU603</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>CPU</strong>
                  </TableCell>
                  <TableCell>Intel Core i9-11900H</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>GPU</strong>
                  </TableCell>
                  <TableCell>NVIDIA RTX 3060</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Memory</strong>
                  </TableCell>
                  <TableCell>16GB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Monitor</strong>
                  </TableCell>
                  <TableCell>1600p IPS 165hz</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Keyboard</strong>
                  </TableCell>
                  <TableCell>FILCO Majestouch Ninja</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Mouse</strong>
                  </TableCell>
                  <TableCell>Logitech G304</TableCell>
                </TableRow>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Uses;
