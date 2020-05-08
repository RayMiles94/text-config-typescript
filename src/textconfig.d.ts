
interface Loseobject  {
    [key : string]: any | undefined  ;
}

declare namespace NodeJS {
    export interface ProcessEnv {
        DATACONFIG: Loseobject | any;
    }
}