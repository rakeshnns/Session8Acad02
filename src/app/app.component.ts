import { Component, OnInit  } from '@angular/core';
import { FamilyMember } from './app.service';
import { Member } from './app.member';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*providers: [FamilyMember]              Giving Service name in Provider-declare in ngmodule */
})
export class AppComponent implements OnInit  {
    namep: string;
    agep: number;
    fname: string;
    fage: number;
    len: number;

    FAMILYARRAY: Member[];
    FAMILYDetail: Member;

    /* Using service in Contructor */
    constructor(private familymember: FamilyMember) {}

    ngOnInit() {
      this.fname = `Name`;
      this.fage = 0 ;
    }

    /*Add member function on click will add new members.*/
    addmember(namep, agep) {
      if ((namep === `Name`) || (agep === 0) ) {
        alert(`Please provide valid inputs`);

    } else {
      this.FAMILYDetail = {
        name: namep,
        age: agep
      };
      this.familymember.addFamilyFunction(this.FAMILYDetail);
    }

     /*Get all the memebers currently in the system*/
     this.FAMILYARRAY  = this.familymember.getFamilyFunction();
     this.len = this.FAMILYARRAY.length;
     console.log(this.len);

    }
}
