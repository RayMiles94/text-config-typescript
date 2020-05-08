import fs from 'fs';
import { TxtFileType } from './type';


interface Loseobject  {
    [key : string]: any | undefined  ;
}


export class TextConfig {

    public Filename: string;
    private type: TxtFileType;
    

    constructor(Filename: string) {
        this.Filename = Filename;
        this.type = new TxtFileType(Filename);
        if (this.type.checkfile() == false) {
            throw new Error("this type is not txt file");
        }
        this.parseFile();
    }

    private parseFile() {
        let file;
        let obj: Loseobject= {};
        try {
             file = fs.readFileSync(this.Filename);
        }
        catch(err) {
            console.log(err);
        }

        let lines: string[] | undefined = file?.toString().split('\n');
        if (lines != undefined) {
            lines.forEach(element => {
                const data = element.split('=');
                if(data.length == 2) {
                    obj[data[0].split(' ')[0]] = data[1];
                }
            });
        }
        console.log(obj.name)
        process.env.DATACONFIG = obj;
    }
}

