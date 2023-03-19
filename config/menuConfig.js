// config/menuConfig.js
const menuConfig = {
  menu: [
    {
      type: "linkButton",
      label: "Home",
      url: "/",
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
