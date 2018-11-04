import {Card} from "./Card";
import {observable} from "mobx";

export type CharacterType = "elementalist" | "cragheart" | "plagueherald" | "quartermaster" | "scoundrel";

export const CharacterTypes : CharacterType[] = ["cragheart", "elementalist", "plagueherald", "quartermaster", "scoundrel"];

export class Character {
    type: CharacterType;
    @observable level: number;
    cards: Card[];

    constructor(type: CharacterType, cards: Card[], level: number) {
        this.type = type;
        this.cards = cards;
        this.level = level;
    }
}