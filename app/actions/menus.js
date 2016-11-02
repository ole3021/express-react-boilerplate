/*
 * Menu items for the SideBar.
 * {
 *   name: ''
 *   href: ''
 *   iconClass: ''
 *   subMenus: [{
 *     name: ''
 *     href: ''
 *     iconClass: ''
 *   }
 *   ...
 *   ]
 * }
 */

export const SET_MENUS = 'SET_MENUS'
export const SET_CURRENT_MENU = 'SET_CURRENT_MENU'
export const SET_CURRENT_SUB_MENU = 'SET_CURRENT_SUB_MENU'
export const CLEAR_CURRENT_SUB_MENU = 'CLEAR_CURRENT_SUB_MENU'

export const MENUS = [
  {
    name: 'Dashboard',
    href: '/',
    title: 'Dashboard',
    subTitle: 'WeChat Now',
    iconClass: 'fa fa-dashboard'
  },
  {
    name: 'Functions',
    href: '',
    title: 'Functions',
    subTitle: 'WeChat Functions',
    iconClass: 'fa fa-cubes',
    subMenus: [
      {
        name: 'Custom Menu',
        href: '/test',
        title: 'Custom Menu',
        subTitle: 'Customize public account menu',
        iconClass: 'fa fa-bars'
      },
      {
        name: 'Broadcast',
        href: '',
        title: 'Send Broadcast',
        subTitle: 'Send Broadcast',
        iconClass: 'fa fa-paper-plane'
      },
      {
        name: 'AutoReply',
        href: '',
        title: 'AutoReply',
        subTitle: 'Set AutoReply Rules',
        iconClass: 'fa fa-mail-reply-all'
      }
    ]
  },
  {
    name: 'Management',
    href: '',
    title: 'Management',
    subTitle: 'Management Resources',
    iconClass: 'fa fa-columns',
    subMenus: [
      {
        name: 'QR Campaign',
        href: '',
        title: 'QR Campaign',
        subTitle: 'Manage QR Campaigns',
        iconClass: 'fa fa-qrcode'
      },
      {
        name: 'Content',
        href: '',
        title: 'Content',
        subTitle: 'Manage Contents',
        iconClass: 'fa fa-folder'
      },
      {
        name: 'POI',
        href: '',
        title: 'Positions of Interest',
        subTitle: 'Manage user interest Positions',
        iconClass: 'fa fa-location-arrow'
      },
      {
        name: 'Messages',
        href: '',
        title: 'Messages',
        subTitle: 'Manage Messages',
        iconClass: 'fa fa-comments'
      },
      {
        name: 'Tags',
        href: '',
        title: 'Tags',
        subTitle: 'Manage Tags',
        iconClass: 'fa fa-tags'
      },
      {
        name: 'Followers',
        href: '',
        title: 'Account Followers',
        subTitle: 'Manage Followers',
        iconClass: 'fa fa-users'
      }
    ]
  },
  {
    name: 'Analysis',
    href: '',
    title: 'Analysis',
    subTitle: 'Check Analysis data',
    iconClass: 'fa fa-bar-chart',
    subMenus: [
      {
        name: 'Menus',
        href: '',
        title: 'Menu',
        subTitle: 'Menu Analysis',
        iconClass: 'fa fa-bars'
      },
      {
        name: 'QR Campaign',
        href: '',
        title: 'QR Campaign',
        subTitle: 'QR Campaign Analysis',
        iconClass: 'fa fa-qrcode'
      },
      {
        name: 'Article',
        href: '',
        title: 'Article',
        subTitle: 'Article Analysis',
        iconClass: 'fa fa-file-text'
      },
      {
        name: 'POI',
        href: '',
        title: 'Positions of Interest',
        subTitle: 'POI Analysis',
        iconClass: 'fa fa-location-arrow'
      },
      {
        name: 'Messages',
        href: '',
        title: 'Messages',
        subTitle: 'Messages Analysis',
        iconClass: 'fa fa-comments'
      },
      {
        name: 'Followers',
        href: '',
        title: 'Followers',
        subTitle: 'Followers Analysis',
        iconClass: 'fa fa-users'
      }
    ]
  }
]

export const setMenus = (menus) => ({
  type: SET_MENUS,
  menus
})

export const setCurrentMenu = (menuItem) => ({
  type: SET_CURRENT_MENU,
  menuItem
})

export const setCurrentSubMenu = (menuItem) => ({
  type: SET_CURRENT_SUB_MENU,
  menuItem
})

export const clearCurrentSubMenu = () => ({
  type: CLEAR_CURRENT_SUB_MENU
})
