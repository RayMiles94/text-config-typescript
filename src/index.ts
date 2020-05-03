import fs from 'fs';
import { TxtFileType } from './type';

export class TextConfig {

    public Filename: string;
    private type: TxtFileType;
    private params: String[] = [];

    constructor(Filename: string) {
        this.Filename = Filename;
        this.type = new TxtFileType(Filename);
        if (this.type.checkfile() == false) {
            throw new Error("this type is not txt file");
        }
        this.parseFile();
    }

    private parseFile() {
        let file = fs.readFileSync(this.Filename);
    }

}