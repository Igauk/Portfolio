import {Component} from '@angular/core';

interface Project {
  name: string,
  description: string,
  image: string,
  link: string,
  contributions: string[],
  skills: string[],
  isFlipped: boolean,
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'ZergCrush',
      description: 'A Starcraft II bot created to compete in a University tournament, created using the Starcraft II API.',
      image: 'assets/sc2.svg',
      contributions: [
        "Created unit micro behaviours such as kiting and target selection",
        "Created wrapper classes for unit and building management that react to the game state",
        "Created unit macro behaviours such as unit clustering and attacking patterns"
      ],
      link: 'https://github.com/Igauk/ZERG-CRUSH',
      skills: ['C++', 'api-driven development'],
      isFlipped: false,
    },

    {
      name: 'BrewWave',
      description: 'Made for the natHACKS 2023 competition, BrewWave is a Brain Computer Interface (BCI) enabled radio player which allows users with cognitive and motor disabilities to interact with the radio!',
      image: 'assets/BrewWave.svg',
      contributions: [
        "Charged with frontend functionality and look",
        "Created custom icons for the website",
        "Integrated BCI backend"
      ],
      link: 'https://github.com/Igauk/ZERG-CRUSH',
      skills: ['JavaScript', 'BCI', 'Figma'],
      isFlipped: false,
    },

    {
      name: 'Underpromotion',
      description: '"Underpromotion" is a university RPGMaker project that spins chess gameplay into a unique narrative puzzle experience.',
      image: 'assets/rook.svg',
      contributions: [
        "Designed levels",
        "Scoped work for all teams",
        "Created movement and trap mechanics",
        "Integrated assets from art, sound and writing teams",
      ],
      link: 'https://samquist.itch.io/underpromotion',
      skills: ['JavaScript', 'RPGMaker', 'Project Management'],
      isFlipped: false,
    },
  ];

  openProjectLink(githubLink: string) {
    window.open(githubLink);
  }

  flipCard(project: Project, openLink = false): void {
    project.isFlipped = !project.isFlipped;
    if (openLink) {
      this.openProjectLink(project.link);
    }
  }
}
