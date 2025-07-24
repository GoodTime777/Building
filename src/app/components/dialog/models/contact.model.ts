import { formatDate } from '@angular/common';
import { IContact } from '../interfaces/contact.interface';
// import

export class Contact implements IContact {
  public time: string = formatDate(Date.now(), 'medium', 'ru');
  public name: string;
  public address: string;
  public tel: string;
  public email: string;
  public works: string;
  public comments: string;

  constructor(form: IContact) {
    Object.assign(this, form);
  }
}
