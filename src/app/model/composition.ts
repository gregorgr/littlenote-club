
export class Composition{

    // public  title: string;

    constructor(
        public composition_id?: number,
        public title?: string,
        public composer?: string,
       // public description?: string,
        public liricist?: string,
        public links?: [],
        public type: string = "razno",   
        public preview?: string, 
        public uri?:string
        // public imagePath?: string
        ){
    } 
}