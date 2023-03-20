// config/menuConfig.js
const menuConfig = {
  menu: [
    {
      type: "linkButton",
      label: "Home",
      url: "/",
    },
    {
      type: "linkButton",
      label: "About",
      url: "/about",
    },
    {
      type: "subMenuButton",
      label: "Socials",
      items: [
        {
          type: "linkButton",
          label: "Instagram",
          url: "https://www.instagram.com/robrien.xyz/",
        },
        {
          type: "linkButton",
          label: "Twitter",
          url: "https://www.twitter.com/rob_obr",
        },
        {
          type: "linkButton",
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/r-obrien/",
        },
        {
          type: "linkButton",
          label: "TikTok",
          url: "https://www.tiktok.com/@rob.obrien/",
        },
        {
          type: "linkButton",
          label: "Email",
          url: "mailto:robert@robrien.xyz?subject=Hello%20Robert&body=Hello%20Robert%2C%0A%20%0A",
        },
      ],
    },
    {
      type: "subMenuButton",
      label: "Projects",
      items: [
        {
          type: "linkButton",
          label: "Project 1",
          url: "/project-1",
        },
        {
          type: "subMenuButton",
          label: "Project 2",
          items: [
            {
              type: "linkButton",
              label: "Subproject 1",
              url: "/project-2/subproject-1",
            },
            {
              type: "linkButton",
              label: "Subproject 2",
              url: "/project-2/subproject-2",
            },
          ],
        },
        {
          type: "subMenuButton",
          label: "Project 2",
          items: [
            {
              type: "linkButton",
              label: "Subproject 3",
              url: "/project-2/subproject-1",
            },
            {
              type: "linkButton",
              label: "Subproject 4",
              url: "/project-2/subproject-2",
            },
          ],
        },
      ],
    },
    {
      type: "subMenuButton",
      label: "Albums",
      items: [
        {
          type: "linkButton",
          label: "Album1",
          url: "/project-1",
        },
        {
          type: "subMenuButton",
          label: "Albums_archive",
          items: [
            {
              type: "linkButton",
              label: "archivealbum1",
              url: "/project-2/subproject-1",
            },
            {
              type: "linkButton",
              label: "archivealbum1",
              url: "/project-2/subproject-2",
            },
          ],
        },
      ],
    },
  ],
};

export default menuConfig;
