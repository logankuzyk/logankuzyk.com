import { Project } from "../../types";

import sharedditMacbook from "../images/shareddit/shareddit-macbook.png";

export const projects: Project[] = [
  {
    title: "shareddit",
    description:
      "A web application to generate PNG images from reddit submissions and comment threads. First launched in Summer 2020, the project has improved greatly since its first iteration.",
    repoName: "shareddit",
    link: "https://shareddit.com",
    mainTech: ["React", "TypeScript", "Express.js", "Nginx"],
    image: sharedditMacbook,
  },
  {
    title: "Gecko for reddit",
    description:
      "A cross-platform reddit client written in React Native with a focus on efficient and logical navigation.",
    repoName: "gecko-for-reddit",
    mainTech: ["React Native", "TypeScript", "React Query"],
  },
  {
    title: "Discord Assignment Reminder Bot",
    description:
      "A Discord bot designed for the UVic Engineering & Computer Science server, to keep track of important dates for each course.",
    mainTech: ["Node.js", "Discord.js"],
    repoName: "discord-reminder-bot",
  },
];
