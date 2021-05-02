export interface Applicationdto{
    applicaitonId:number;
    categoryId:number;
    developerId:number;
    developerFirstName:string;
    developerLastName:string;
    applicationName:string;
    categoryName:string;
    description:string;
    applicationPath:string;
    isActiveApplication:boolean;
    isHomeApplication:boolean;
    applicaitonIconPath:string;
    isActiveCategory:boolean;
    releaseDate:Date;
}