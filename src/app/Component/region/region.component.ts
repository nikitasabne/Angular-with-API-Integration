import { Component, inject, OnInit } from '@angular/core';
import { RegionService } from '../../../Service/region.service';
import { RegionModel } from '../../../Model/region';

@Component({
  selector: 'app-region',
  imports: [],
  templateUrl: './region.component.html',
  styleUrl: './region.component.css',
})
export class RegionComponent implements OnInit {
  regionList: RegionModel[] = [];
  regionService = inject(RegionService);
  items: number = 5;

  ngOnInit(): void {
    this.getAllRegion();
  }

  getAllRegion() {
    this.regionService.GetAllRegion().subscribe((result: any) => {
      this.regionList = result;
    });
  }
}
