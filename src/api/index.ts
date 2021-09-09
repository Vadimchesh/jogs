import { IDelivery } from "./apiLayer";
import ApiAuth from "./ApiAuth";
import ApiJogs from "./ApiJogs";

class Delivery implements IDelivery {
  ApiJogs = ApiJogs;
  ApiAuth = ApiAuth;
}

export default new Delivery();
