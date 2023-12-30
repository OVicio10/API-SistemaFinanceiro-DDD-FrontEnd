import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesaComponent } from './despesa.component';
import { DespesaRoutingModule } from './despesa-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule(
    {
        providers: [],
        declarations: [DespesaComponent],
        imports: [
            CommonModule,
            DespesaRoutingModule,
            NavbarModule,
            SidebarModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule
        ]
    }
)

export class DespesaModule { }