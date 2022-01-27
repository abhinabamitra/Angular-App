import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-App';
  newMemberName = "";
  members:string[] = [];
  errorMessage ='';
  numberofTeams:number | "" = "";
  teams:string[][] = [];

  addmember(){
    //console.log('CLICKED')
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty"
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName ="";
    this.errorMessage ="";
    console.log(this.members);
  }

  onInput(member:string) {
    this.newMemberName = member;
    //console.log(this.newMemberName)
  }

  onNumberOfTeamsInput(value:string) {
    this.numberofTeams = Number(value);

  }

  generateTeams() {
    if(!this.numberofTeams || this.numberofTeams<=0){
      this.errorMessage = "Invalid Number of Teams"
      return;
    }
    if(this.members.length < this.numberofTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    this.errorMessage = '';

    const allMembers = [...this.members]

    while(allMembers.length) {
      for(let i=0; i< this.numberofTeams; i++) {
        const randomIndex = Math.floor(Math.random()*allMembers.length)
        const member = allMembers.splice(randomIndex,1)[0];
        if(!member) break;
        if(this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    
    this.members =[];
    this.numberofTeams = '';
  }

}
