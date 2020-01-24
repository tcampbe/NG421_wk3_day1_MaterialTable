import { Injectable } from "@angular/core";
import { IMember } from "../interfaces/imember";
import { members } from "../club-members";

@Injectable({
  providedIn: "root"
})
export class MemberSService {
  Members: IMember[];

  constructor() {
    this.Members = members;
  }

  getmembers(): IMember[] {
    return this.Members;
  }
}
