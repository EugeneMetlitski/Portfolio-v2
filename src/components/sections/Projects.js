import React from 'react';
import Typography from '@material-ui/core/Typography';

import SectionTitle from './../elements/SectionTitle';
import Project from './../elements/Project';
// import TitleImage from './../../resources/title-image.jpg';
import ImgWorkoutApp from './../../resources/workout-app.PNG';
import ImgPortfolioV1 from './../../resources/portfolio-v1.PNG';
import ImgPortfolioV2 from './../../resources/portfolio-v2.PNG';


export default function Projects() {
  return (
    <React.Fragment>
      
      <SectionTitle title="Projects" />

      <Project
        title="Workout App"
        image={ImgWorkoutApp}
        imageTitle="Workout App"
        technologies={['Angular', '.Net Core 2', 'SQL Server']}
        appLink='http://eugene-metlitski.com/workout-app/login'
        github='https://github.com/EugeneMetlitski/Workout-App-v1'
        introduction={`
          This is a personal app I created to help with workout sessions. It records
          the details of a weight-lifting session (date, exercises done, weights,
          etc). It can support multiple users.
        `}
        paddingTop='59%'
      >
        <Typography paragraph>
          The instructions on how to use the app can be found on the GitHub page for
          this app (GitHub repo for the front-end portion of the app). Feel free to
          browse through instructions and source code on GitHub and to use the app
          itself.
        </Typography>
        <Typography paragraph>
          This is a web app that connects to the same back-end api that
          the portfolio website is served from. It stores the details of a workout
          session in an SQL database. The back-end and database are hosted in Azure.
        </Typography>
        <Typography paragraph>
          This app is written with Angular 7 on the front-end. All the elements have
          been designed from scratch (i.e. it is not using Bootstrap or Material UI
          library for element design).
        </Typography>
        <Typography paragraph>
          The back-end is written in .Net Core 2. The source code for the back-end
          is in my private repository for security and I can show/discuss it upon
          requested.
        </Typography>
      </Project>

      <Project
        title="Portfolio Website (version 2)"
        image={ImgPortfolioV2}
        imageTitle="Portfolio Project v2"
        technologies={['React', '.Net Core 2', 'SQL Server']}
        github='https://github.com/EugeneMetlitski/Portfolio-v2'
        introduction={`
          This is a second version of my portfolio website, which I created
          recently near the end of 2019. It uses React and Material-UI on
          the front end, and it has a nicer design than previous.
        `}
        paddingTop='59%'
      >
        <Typography paragraph>
          The source code for the front-end portion of this application is
          in my public GitHub repository.
        </Typography>
        <Typography paragraph>
          The back-end is the same as the back-end for version 1 of my
          portfolio site. It is created with .Net Core 2. It uses SQL
          Server as the database to store any messages sent through the
          "Contact" section.
        </Typography>
        <Typography>
          This website and the database are hosted in Azure.
        </Typography>
      </Project>

      <Project
        title="Portfolio Website (version 1)"
        image={ImgPortfolioV1}
        imageTitle="Portfolio Project v2"
        technologies={['Angular', '.Net Core 2', 'SQL Server']}
        appLink='http://eugene-metlitski.com/portfolio-site-v1'
        github='https://github.com/EugeneMetlitski/Portfolio-v1'
        introduction={`
          This is my first portfolio website. It was created in 2018 and it's one of
          my first personal projects that I worked on in the spare time.
        `}
        paddingTop='59%'
      >
        <Typography paragraph>
          The front-end was created using Angular 7. I have gone through a Udemy course on Angurar
          and used the knowledge from there to create this website.
        </Typography>
        <Typography paragraph>
          All of the designs for elements and the layout of the website were created from scratch
          (i.e. no templates were used, no Bootstrap or Material Design libraries were used).
        </Typography>
        <Typography paragraph>
          The back-end was created using .Net Core 2. SQL Server database is used to to store any
          messages sent throught the 'Contact' section of the website. The website is hosted using
          Azure services.
        </Typography>
        <Typography paragraph>
          Feel free to take a look at the website and the source code for the front-end portion in
          my GitHub repository. The source code for the back-end is hosted in a private repository
          and I can show/discuss it upon request.
        </Typography>
      </Project>

    </React.Fragment>
  );
}
