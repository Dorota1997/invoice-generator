import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { materialModules } from '../../material-imports';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule, ...materialModules],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
