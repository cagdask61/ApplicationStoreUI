export interface Application{
    id:number;
    categoryId:number;
    developerId:number;
    applicationName:string;
    description:string;
    applicationPath:string;
    isActive:boolean;
    isHome:boolean;
    iconPath:string;
    releaseDate:Date;
}