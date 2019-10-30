import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  //MatFormFieldModule,
  MatCardModule
  
  
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    //Ilya//
    //MatFormFieldModule,
    //Ilya//
    MatCardModule,
    

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    //Ilya//
    //MatFormFieldModule,
    //Ilya//
    MatCardModule
  ]
})
export class MaterialModule {}