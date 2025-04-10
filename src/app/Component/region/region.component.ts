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
  RegionImageUrl: File | null = null;
  selectedFileName: string = 'No file chosen';

  ngOnInit(): void {
    this.getAllRegion();
  }

  onFileSelected(event: any) {
    this.RegionImageUrl = event.target.files[0];
    this.selectedFileName = this.RegionImageUrl
      ? this.RegionImageUrl.name
      : 'No file chosen';
  }

  getAllRegion() {
    this.regionService.GetAllRegion().subscribe((result: any) => {
      this.regionList = result;
    });
  }

  CreateRegion() {
    const formData = new FormData();
    formData.append('code', this.regionObj.code);
    formData.append('name', this.regionObj.name);
    if (this.RegionImageUrl) {
      formData.append('RegionImageUrl', this.RegionImageUrl);
    }
    this.regionService.SaveRegion(formData).subscribe({
      next: (res) => {
        alert('Region created');
        this.getAllRegion(); // reload region list
      },
      error: (err) => {
        console.error(err);
        alert('Error creating region');
      },
    });
    this.getAllRegion();
  }

  Reset() {
    this.regionObj = new RegionModel(); // clear form data
    this.RegionImageUrl = null;
  }

  EditRegion(data: RegionModel) {
    this.regionObj = data;
  }

  UpdateRegion() {
    const formData = new FormData();
    formData.append('code', this.regionObj.code);
    formData.append('name', this.regionObj.name);
    if (this.RegionImageUrl) {
      formData.append('RegionImageUrl', this.RegionImageUrl);
    }
    this.regionService.UpdateRegion(this.regionObj.id, formData).subscribe({
      next: (res) => {
        alert('Region Updated');
        this.getAllRegion(); // reload region list
      },
      error: (err) => {
        console.error(err);
        alert('Error creating region');
      },
    });
    this.getAllRegion();
  }

  DeleteRegion(obj: RegionModel) {
    this.regionService.DeleteRegion(obj).subscribe(() => {
      alert('Region Deleted');
    });
    this.getAllRegion();
  }
}
