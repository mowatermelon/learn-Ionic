import { Component } from '@angular/core';

import { MediaPage } from '../media/media';
import { ContactPage } from '../contact/contact';
import { FormPage } from '../form/form';
import { ActionPage } from '../action/action';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MediaPage;
  tab2Root = FormPage;
  tab3Root = ActionPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
