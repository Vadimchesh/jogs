import ApiAuth from "./ApiAuth";
import ApiJogs from "./ApiJogs";
import { IDelivery } from "./apiLayer";

class Delivery implements IDelivery {
  ApiJogs = ApiJogs;
  ApiAuth = ApiAuth;
}

export default new Delivery();
