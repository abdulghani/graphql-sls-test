import { Injectable } from "./test.util";

@Injectable()
class TestService {
  public getHello() {
    return "hello world updated";
  }
}

export default TestService;
