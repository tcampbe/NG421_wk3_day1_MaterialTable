import { Component, OnInit, ViewChild } from "@angular/core";
import { IMember } from "../interfaces/imember";
import { MemberSService } from "../services/member-s.service";
import { MatTableModule, MatTableDataSource } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-members-table",
  templateUrl: "./members-table.component.html",
  styleUrls: ["./members-table.component.css"]
})
export class MembersTableComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "age", "currentMember"];
  dataSource: MatTableDataSource<IMember>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private memberSService: MemberSService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.memberSService.members);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
