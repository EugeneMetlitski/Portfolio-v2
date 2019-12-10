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
          browse through instructions and source code on GitHub and feel free to use
          the app itself.
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
          is in my private repository for security. I can show and/or discuss the
          back-end if requested.
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


      {/* <Project
        title="Platformer Game"
        image={TitleImage}
        imageTitle="Platformer Game Project"
        introduction={`
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        `}
        paddingTop='56.25%'
      >
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
          minutes.
        </Typography>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
          heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
          browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
          and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
        <Typography paragraph>
          Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
          without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
          medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
          again without stirring, until mussels have opened and rice is just tender, 5 to 7
          minutes more. (Discard any mussels that don’t open.)
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </Project> */}

    </React.Fragment>
  );
}
