import { ResponseModel } from "./responseModel";

export interface ListDataResponseModel<DList> extends ResponseModel{
    dataList:DList[];
    dataCount:number;
}