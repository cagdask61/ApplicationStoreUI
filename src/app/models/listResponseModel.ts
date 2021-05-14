import { ResponseModel } from "./responseModel";

export interface ListResponseModel<L> extends ResponseModel{
    data:L[];
}