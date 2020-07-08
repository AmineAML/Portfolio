import { Component, OnInit, Inject } from '@angular/core';
import { curriculumVitae } from "./curriculum-vitae";
import enResume from "../../../assets/data/en-resume.json";
import frResume from "../../../assets/data/fr-resume.json";
import { faGraduationCap, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { TRANSLATION, Translation, WebsiteLanguage } from 'src/app/i18n/utils';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  cv: curriculumVitae;

  faGraduationCap = faGraduationCap;
  faFileDownload = faFileDownload;

  cvDownload;
  downloadText;

    //Translations
    translations = Object.entries(WebsiteLanguage);

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, @Inject(TRANSLATION) public readonly lang: Translation) { 
    //console.log(resume.basics.name, resume.basics.label, resume.basics.profiles[0].username)
  }

  //CV with language of user with 2 json cv files per language
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
    if(this.lang.language == 'English') {
      this.cv = enResume;
    } else {
      this.cv = frResume;
    }
  }

}
