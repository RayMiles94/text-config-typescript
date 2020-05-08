export declare class TextConfig {
    Filename: string;
    private type;
    private RAWDATA;
    private RAWOBJECT;
    constructor(Filename: string);
    private parseFile;
    getItem(str: string): string | undefined;
    getRAWDATA(): string | undefined;
}
