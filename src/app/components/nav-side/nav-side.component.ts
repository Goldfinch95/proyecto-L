import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-side',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './nav-side.component.html',
  styleUrl: './nav-side.component.scss'
})
export class NavSideComponent {

}
