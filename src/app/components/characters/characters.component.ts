import {Component, Input} from '@angular/core';
import {CharacterDto} from "../../types";
import {CharacterItemComponent} from "./character-item/character-item.component";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CharacterItemComponent
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  @Input() characters: CharacterDto[] = [];
}
