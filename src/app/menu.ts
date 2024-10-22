export class MenuModel {
  name: string = '';
  icon: string = '';
  url: string = '';
  isTitle: boolean = false;
  subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
  {
    name: 'Anasayfa',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenus: [],
  },
  {
    name: 'Ana Group',
    icon: 'fa-solid fa-trowel-bricks',
    url: '',
    isTitle: false,
    subMenus: [
      {
        name: 'Müşteriler',
        icon: 'fa-solid fa-users-gear',
        url: '/customers',
        isTitle: false,
        subMenus: []
      },
      {
        name: 'Ürünler',
        icon: 'fa-solid fa-pallet',
        url: '/products',
        isTitle: false,
        subMenus: []
      },
    ],
  },
];
