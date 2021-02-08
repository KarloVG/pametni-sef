import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CustomizerService } from 'src/app/shared/services/customizer.service';


@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent {

  public customizer: any
  public sidebarSetting: any = 'color'
  public layoutType: string = 'ltr'
  public sidebarType: string = 'default'
  public data: any;

  constructor(public customize: CustomizerService,
    private modalService: NgbModal) {
    this.customize.data.color.layout_version = localStorage.getItem("layoutVersion")
    this.customize.data.color.color = localStorage.getItem("color")
    this.customize.data.color.primary_color = localStorage.getItem("primary_color")
    this.customize.data.color.secondary_color = localStorage.getItem("secondary_color")
  }

  // Open customizer
  openCustomizerSetting(val: string): void {
    this.customizer = val;
  }

  // Customize Layout Type
  customizeLayoutType(val: string): void {
    this.customize.setLayoutType(val);
    this.layoutType = val;
  }

  // Customize Sidebar Type
  customizeSidebarType(val: string): void {
    if (val == 'default') {
      this.customize.data.settings.sidebar.type = 'default';
      this.customize.data.settings.sidebar.body_type = 'default';
    } else if (val == 'compact') {
      this.customize.data.settings.sidebar.type = 'compact-wrapper';
      this.customize.data.settings.sidebar.body_type = 'sidebar-icon';
    } else if (val == 'compact-icon') {
      this.customize.data.settings.sidebar.type = 'compact-page';
      this.customize.data.settings.sidebar.body_type = 'sidebar-hover';
    }
    this.sidebarType = val;
  }

  // Customize Sidebar Setting
  customizeSidebarSetting(val: string): void {
    this.customize.data.settings.sidebar_setting = val;
  }

  // Customize Mix Layout
  customizeMixLayout(val: string): void {
    this.customize.setLayout(val);
  }

  // Customize Light Color
  customizeLightColorScheme(val: string): void {
    this.customize.setColorLightScheme(val)
  }

  // Customize Dark Color
  customizeDarkColorScheme(val: string): void {
    this.customize.setColorDarkScheme(val)
  }
}
