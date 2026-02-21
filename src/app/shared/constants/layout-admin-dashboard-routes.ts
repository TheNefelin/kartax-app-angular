import { ROUTES_CONSTANT } from "@shared/constants/routes-constant";
import { RouteModel } from "@shared/models/route-model";

export const LAYOUT_ADMIN_DASHBOARD_NAVIGATION: RouteModel[] = [
  {
    name: 'Home',
    route: ROUTES_CONSTANT.PROTECTED.ADMIN.HOME,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`
  },
  {
    name: 'Categorias',
    route: ROUTES_CONSTANT.PROTECTED.ADMIN.CATEGORIES,
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 11V2h9v9zm0 2h9v9H2zM13 2v9h9V2zm0 20v-9h9v9z"/></svg>`,
  },
  {
    name: 'Grupos',
    route: ROUTES_CONSTANT.PROTECTED.ADMIN.GROUPS,
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="m12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.6 25.6 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04m487.18 88.28l-58.09-26.33l-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40m0 127.8l-57.87-26.23l-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87L12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40"/></svg>`
  },
  {
    name: 'Productos',
    route: ROUTES_CONSTANT.PROTECTED.ADMIN.PRODUCTS,
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#fff" d="m5.44 7.96l.52-.53c.58-.58 1.54-.58 2.14.04l.02.03c.49.5 1.14.74 1.85.81c.97.09 1.91.61 2.53 1.55c.68 1.08.67 2.52-.04 3.59a3.322 3.322 0 0 1-5.18.55c-.56-.55-.88-1.26-.96-2c-.08-.73-.37-1.42-.88-1.93c-.58-.57-.58-1.53 0-2.11M9.64 16c-1.17 0-2.26-.45-3.07-1.28c-.7-.72-1.14-1.62-1.25-2.6c-.03-.3-.12-.69-.36-1.05C4.36 11.9 4 12.9 4 14c0 1.64.8 3.09 2.03 4H19v-1c0-3.6-2.39-6.65-5.66-7.65c.89 1.4.87 3.27-.04 4.65c-.8 1.25-2.18 2-3.66 2m5.14-8.44h1.27c.87 0 1.63.61 1.63 1.7V10h1.25V9c0-1.5-1.33-2.64-2.88-2.64h-1.27c-.83 0-1.54-.82-1.54-1.66s.71-1.46 1.54-1.46V2C13.24 2 12 3.24 12 4.78s1.24 2.78 2.78 2.78M4.5 7.55c.06-.1.14-.2.23-.3l.52-.52c.09-.09.19-.16.29-.23L4.13 5.07c.14-.27.09-.62-.13-.85a.767.767 0 0 0-1.07 0c-.14.14-.21.31-.22.49c-.18.01-.35.08-.49.22c-.29.29-.29.77 0 1.07c.23.22.57.27.85.13zm13.89-3.16c.51-.51.83-1.2.83-1.97h-1.25c0 .83-.7 1.53-1.53 1.53v1.24c1.86 0 3.32 1.52 3.32 3.38V11H21V8.57a4.61 4.61 0 0 0-2.61-4.18M5 21h14c1.11 0 2-.89 2-2H3a2 2 0 0 0 2 2"/></svg>`
  },
  {
    name: 'Dispositivo Movil',
    route: ROUTES_CONSTANT.PROTECTED.ADMIN.MOBILE,
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><defs><mask id="SVGX9FZtb2j"><g fill="none" stroke-width="4"><path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M8 30h32v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"/><path stroke="#fff" stroke-linejoin="round" d="M40 30V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v24"/><path stroke="#000" stroke-linecap="round" d="M22 37h4"/></g></mask></defs><path fill="#fff" d="M0 0h48v48H0z" mask="url(#SVGX9FZtb2j)"/></svg>`
  },
  {
    name: 'Test',
    route: ROUTES_CONSTANT.PROTECTED.ADMIN.TEST,
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 2048 2048"><path fill="#fff" d="M1914 1539q6 30 6 61t-6 61l124 51l-49 119l-124-52q-35 51-86 86l52 124l-119 49l-51-124q-30 6-61 6t-61-6l-51 124l-119-49l52-124q-51-35-86-86l-124 52l-49-119l124-51q-6-30-6-61t6-61l-124-51l49-119l124 52q35-51 86-86l-52-124l119-49l51 124q30-6 61-6t61 6l51-124l119 49l-52 124q51 35 86 86l124-52l49 119zm-314 253q40 0 75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15m-576-192q0 65 14 128t42 120t67 108t91 92H354q-40 0-75-15t-61-41t-42-61t-15-75q0-27 7-51t21-48l569-990q10-18 10-35V128H640V0h768v128h-128v604q0 19 9 34l160 278q-63 18-120 48l-150-261q-13-23-20-48t-7-51V128H896v604q0 52-28 100l-330 576h519q-33 93-33 192"/></svg>`
  },
];