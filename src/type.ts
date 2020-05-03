export class TxtFileType {

    constructor(public filename: string) {}

    public checkfile(): boolean {
        const type = this.filename.split('.');
        if (type[type.length-1]=='txt'){
            return true;
        }
        return false;
    }
}


