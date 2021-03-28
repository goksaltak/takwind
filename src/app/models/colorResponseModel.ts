import { ResponseModel } from "./responseModel";
import {Color} from "src/app/models/color"

export interface ColorResponseModel extends ResponseModel{
    data:Color[],
 }