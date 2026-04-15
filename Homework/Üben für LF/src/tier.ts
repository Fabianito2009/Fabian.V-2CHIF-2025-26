export abstract class Tier {
    abstract sprich(): string;
}

export class Hund extends Tier {
    sprich(): string {
        return "wuff";
    }
}

export class Katze extends Tier {
    sprich(): string {
        return "miaow";
    }
}
