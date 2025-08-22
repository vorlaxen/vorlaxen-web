export type NavItem = {
  name: string
  path: string
  external: boolean
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  { name: 'Home', path: '/', external: false },
  {
    name: 'Work',
    path: '/work',
    external: false,
    children: [
      { name: 'Projects', path: '/work/projects', external: false },
      { name: 'Experiments', path: '/work/experiments', external: false },
    ],
  },
  {
    name: 'Me',
    path: '/me',
    external: false,
    children: [
      { name: 'Story', path: '/me/story', external: false },
      { name: 'Stack', path: '/me/stack', external: false },
      { name: 'Behind the Scenes', path: '/me/bts', external: false },
    ],
  },
  {
    name: 'Lab',
    path: '/lab',
    external: false,
    children: [
      { name: 'Open Source', path: 'https://github.com/vorlaxen?tab=repositories', external: true },
      { name: 'Dev Logs', path: '/lab/dev-logs', external: false },
    ],
  },
  { name: 'Resources', path: '/resources', external: false },
  { name: 'Contact', path: '/contact', external: false },
]
