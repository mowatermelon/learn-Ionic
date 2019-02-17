import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Media',
        children: [
          {
            path: '',
            loadChildren: '../media/media.module#MediaPageModule'
          }
        ]
      },
      {
        path: 'Form',
        children: [
          {
            path: '',
            loadChildren: '../form/form.module#FormPageModule'
          }
        ]
      },
      {
        path: 'Action',
        children: [
          {
            path: '',
            loadChildren: '../action/action.module#ActionPageModule'
          }
        ]
      },
      {
        path: 'Contact',
        children: [
          {
            path: '',
            loadChildren: '../contact/contact.module#ContactPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/Media',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Media',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
