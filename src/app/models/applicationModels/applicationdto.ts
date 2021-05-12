export interface Applicationdto{
    applicationId:number;
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
    applicationIconPath:string;
    isActiveCategory:boolean;
    releaseDate:Date;
}