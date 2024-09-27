import {Component, Input} from '@angular/core';
import {CharacterDto} from "../../../types";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-character-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './character-item.component.html',
  styleUrl: './character-item.component.css'
})
export class CharacterItemComponent {

  @Input() character: CharacterDto = {
    id: 2,
    name: "Vegeta",
    ki: "54.000.000",
    maxKi: "19.84 Septillion",
    race: "Saiyan",
    gender: "Male",
    description: "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.",
    image: "https://dragonball-api.com/characters/vegeta_normal.webp",
    affiliation: "Z Fighter",
  };

}
