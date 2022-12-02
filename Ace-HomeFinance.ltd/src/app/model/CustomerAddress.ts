import { CustomerLocal } from "./CustomerLocal";
import { CustomerPermanent } from "./CustomerPermanent";

export class CustomerAddress{
    customerAddressId:number;
    permanentAddress:CustomerPermanent;
    localAddress:CustomerLocal;
}