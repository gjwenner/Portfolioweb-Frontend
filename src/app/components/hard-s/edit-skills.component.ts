import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit{
  skill: Skills = null

  constructor (private skillS: SkillsService, private activatedRouter: ActivatedRoute, private router: Router) {

  }
 
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.details(id).subscribe({
      next: data =>  {
        this.skill = data;
      },
      error: (err) => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    })
    }


  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe({
      next: data =>  {
           this.router.navigate(['']);
      },
      error: err => {
        alert("Error al modificar la Skill");
        this.router.navigate(['']);
      }         
    })
  }

}

