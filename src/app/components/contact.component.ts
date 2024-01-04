import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  navigateToLinkedIn(): void {
    window.open( 'https://www.linkedin.com/in/ian-gauk-886240220/');
  }

  sendEmail(): void {
    const subject = encodeURIComponent('Interested in Working with You');
    window.open(`mailto:igauk@ualberta.ca?subject=${subject}`);
  }
}
