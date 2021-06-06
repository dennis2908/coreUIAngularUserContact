import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'User',
    url: '/user',
    icon: 'cil-user',
    children: [
      {
        name: 'User List',
        url: '/user/user_list',
        icon: 'cil-people'
      },
	  {
        name: 'User Usage',
        url: '/dashboard/userusage',
        icon: 'cil-people'
      },
	  {
        name: 'User Visit',
        url: '/dashboard/dashboard',
        icon: 'cil-people'
      }
    ]
  },
  {
    name: 'Chart',
    url: '/charts',
    icon: 'cil-chart',
    children: [
	  {
        name: 'Line Chart',
        url: '/charts/linechart',
        icon: 'cil-bar-chart'
      },
      {
        name: 'Bar Chart',
        url: '/charts/barchart',
        icon: 'cil-bar-chart'
      },
	  {
        name: 'Doughnut Chart',
        url: '/charts/doughnutchart',
        icon: 'cil-bar-chart'
      },
	  {
        name: 'Radar Chart',
        url: '/charts/radarchart',
        icon: 'cil-bar-chart'
      },
	  {
        name: 'Pie Chart',
        url: '/charts/piechart',
        icon: 'cil-bar-chart'
      },
	  {
        name: 'Polar Chart',
        url: '/charts/polarchart',
        icon: 'cil-bar-chart'
      }
    ]
  },
  {
    name: 'Contact',
    url: '/contact',
    icon: 'cil-playlist-add',
    children: [
      {
        name: 'New Contact',
        url: '/contact/create_contact_form',
        icon: 'cil-plus'
      }
    ]
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: '/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  }
];
