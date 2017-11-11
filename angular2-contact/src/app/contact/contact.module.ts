import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ContactService } from './contact.service';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent],
    providers: [ContactService]
})

export class ContactModule { }
