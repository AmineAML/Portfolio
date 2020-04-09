import { Component, OnInit, Input } from '@angular/core';
import { Language,Interest,Cation,Skills,Basics } from "./curriculum-vitae";
import resume from "../../../assets/data/resume.json";
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  basicData: Basics = resume.basics;
  education: Cation[] = resume.education;
  skills: Skills[] = resume.skills;
  certification: Cation[] = resume.certification;
  languages: Language[] = resume.languages;
  interests: Interest[] = resume.interests;

  faGraduationCap = faGraduationCap;

  constructor() { 
    console.log(resume.basics.name, resume.basics.label, resume.basics.profiles[0].username)
  }

  ngOnInit(): void {
  }

}
