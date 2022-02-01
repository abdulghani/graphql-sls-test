import TestService from "./test.service";
import { Injectable } from "./test.util";

@Injectable()
class TestController {
  constructor(private readonly testService: TestService) {}

  public testGetHello() {
    return this.testService.getHello();
  }
}

export default TestController;
