import { CMatch, IMatch } from ".";

export class CBracket {
    public matches: CMatch[];

    constructor(matches: IMatch[]) {
        this.matches = [];
        for(let match of matches) {
            this.matches.push(new CMatch(match));
        }
    }
}
