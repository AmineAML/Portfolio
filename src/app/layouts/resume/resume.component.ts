import { Component, OnInit, Inject } from '@angular/core';
import { curriculumVitae } from "./curriculum-vitae";
import resume from "../../../assets/data/resume.json";
import { faGraduationCap, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  cv: curriculumVitae = resume;

  faGraduationCap = faGraduationCap;
  faFileDownload = faFileDownload;

  cvDownload;
  downloadText;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { 
    //console.log(resume.basics.name, resume.basics.label, resume.basics.profiles[0].username)
  }

  //CV with language of user
  userIsLanguage() {
    let userLanguage = this.storage.get('Language');
    if (userLanguage == '') {
      //French CV
      this.cvDownload = "";
      this.downloadText = "Télécharger";
    } else { //Other languages than french
      //English CV
      this.cvDownload = "";
      this.downloadText = "Download";
    }
  }

  ngOnInit(): void {
    //this.userIsLanguage();
  }

}
