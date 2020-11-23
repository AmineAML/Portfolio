import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfOneComponent } from './pdf-one/pdf-one.component';
import { PdfThreeComponent } from './pdf-three/pdf-three.component';
import { PdfTwoComponent } from './pdf-two/pdf-two.component';
import { PdfComponent } from './pdf.component';


const routes: Routes = [
  { path: '', component: PdfComponent },
  { path: 'pfe_licence_sciences_economiques', 
    component: PdfOneComponent,
    data: {
      metadata: {
        title: "PFE - L'impact de l'investissement (public et privé) sur la croissance économique",
        description: "Cette étude a pour but de modéliser la relation entre les investissements publiques et privés en adition des IDE (investissements directs étrangers) et la croissance économique au Maroc durant la période 1985 - 2017."
      }
    }
  },
  { path: 'pfe_technicien_specialise_en_developpement_informatique', 
    component: PdfTwoComponent,
    data: {
      metadata: {
        title: "PFE - Conception et réalisation d'une application de gestion de notes",
        description: "Développement d'une application de gestion des notes des étudiants de la faculté qui permettra, d'une part à l'administration de l'établissement de gérer les comptes des étudiant et ceux des professeurs, ces derniers pourront insérer et modifier les notes des étudiant selon leurs modules à responsabilités."
      }
    }
  },
  { path: 'pfe_licence_en_ingenierie_des_applications_mobiles', 
    component: PdfThreeComponent,
    data: {
      metadata: {
        title: "PFE - Étude et réalisation d'une plateforme de guide touristique",
        description: "L’objectif principal de ce travail de projet de fin d’étude consiste à concevoir et développer une application mobile qui permet aux touristes de trouver des endroits d’hébergement, restauration, historique et des évènements pendant leurs séjours au Maroc."
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfRoutingModule {
  static components = [ PdfComponent, PdfOneComponent, PdfTwoComponent, PdfThreeComponent ];
}
