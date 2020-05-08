import fs from 'fs';
import { TxtFileType } from './type';


interface Loseobject  {
    [key : string]: any | undefined  ;
}

export class TextConfig {

    public  Filename: string;
    private type: TxtFileType;
    private RAWDATA: string | undefined = '';
    private RAWOBJECT: Loseobject | undefined | any;
    

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
                if((data.length == 2) && (data!=undefined)) {
                    obj[data[0].split(' ')[0]] = data[1];
                    if (this.RAWDATA==''){
                        this.RAWDATA = data[0].split(' ')[0]+":"+data[1]+"/";
                    }
                    else {
                        this.RAWDATA += data[0].split(' ')[0]+":"+data[1]+"/";
                    }
                }
            });
        }
        

        this.RAWOBJECT = obj;
        process.env.DATACONFIG = this.RAWDATA;
        
    }


    public getItem(str: string): string | undefined {
        try {
            return this.RAWOBJECT[str];
        } catch (error) {
            return "Error";
        }
    }

    public getRAWDATA() {
        return this.RAWDATA;
    }

    
}