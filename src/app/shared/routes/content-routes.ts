import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'naslovna',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'administracija/kontrolni-centar',
    loadChildren: () => import('../../components/administration/control-center/control-center.module').then(m => m.ControlCenterModule)
  },
  {
    path: 'administracija/valuta',
    loadChildren: () => import('../../components/administration/currency/currency.module').then(m => m.CurrencyModule)
  },
  {
    path: 'administracija/tvrtka',
    loadChildren: () => import('../../components/administration/company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'administracija/lokacija',
    loadChildren: () => import('../../components/administration/location/location.module').then(m => m.LocationModule)
  },
  {
    path: 'administracija/banka',
    loadChildren: () => import('../../components/administration/bank/bank.module').then(m => m.BankModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('../../components/map/map.module').then(m => m.MapModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('../../components/application-wizard/application-wizard.module').then(m => m.ApplicationWizardModule)
  },
  {
    path: 'kontakt',
    loadChildren: () => import('../../components/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'o-nama',
    loadChildren: () => import('../../components/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: '',
    redirectTo: 'naslovna',
    pathMatch: 'full'
  }
];
