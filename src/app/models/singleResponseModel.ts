import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<S> extends ResponseModel{
    data:S;
}