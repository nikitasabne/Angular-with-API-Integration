import { Component, inject, OnInit } from '@angular/core';
import { RegionService } from '../../../Service/region.service';
import { FormsModule } from '@angular/forms';
import { RegionModel } from '../../../Model/region';

@Component({
  selector: 'app-region',
  imports: [FormsModule],
  templateUrl: './region.component.html',
  styleUrl: './region.component.css',
})
export class RegionComponent implements OnInit {
  regionList: RegionModel[] = [];
  regionService = inject(RegionService);
  regionObj: RegionModel = new RegionModel();

  ngOnInit(): void {
    this.getAllRegion();
  }

  getAllRegion() {
    this.regionService.GetAllRegion().subscribe((result: any) => {
      this.regionList = result;
    });
  }

  CreateRegion() {
    this.regionService.SaveRegion(this.regionObj).subscribe();
    this.getAllRegion();
  }

  Reset() {}

  EditRegion(data: RegionModel) {
    this.regionObj = data;
  }

  UpdateRegion() {
    this.regionService.UpdateRegion(this.regionObj).subscribe(() => {
      alert('Region Updated');
      this.getAllRegion();
    });
  }

  DeleteRegion(obj: RegionModel) {
    this.regionService.DeleteRegion(obj).subscribe(() => {
      alert('Region Deleted');
    });
    this.getAllRegion();
  }
}
