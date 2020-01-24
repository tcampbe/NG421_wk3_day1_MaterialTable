import { Injectable } from "@angular/core";
import { IMember } from "../interfaces/imember";
import { members } from "../club-members";

@Injectable({
  providedIn: "root"
})
export class MemberSService {
  members: IMember[] = [];

  constructor() {
    this.members = members;
  }

  getmembers(): IMember[] {
    return this.members;
  }
}
