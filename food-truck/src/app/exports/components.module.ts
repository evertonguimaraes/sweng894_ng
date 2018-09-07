import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateAccountComponent } from "../pages/create-account/create-account.component";
import { CreateEventComponent } from "../pages/create-event/create-event.component";
import { EditProfileComponent } from "../pages/edit-profile/edit-profile.component";

const Components = [
    CreateAccountComponent,
    CreateEventComponent,
    EditProfileComponent
];

@NgModule({
    declarations: [Components],
    exports: [Components, CommonModule]
})
export class ComponentsModule {}