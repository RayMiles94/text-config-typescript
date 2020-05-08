export class TxtFileType {

    constructor(public filename: string) {}

    public checkfile(): boolean {
        // create type
        const type = this.filename.split('.');
        if (type[type.length-1]=='txt'){
            return true;
        }
        return false;
    }
}