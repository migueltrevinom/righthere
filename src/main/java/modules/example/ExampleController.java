package modules.example;

import spark.Request;
import spark.Response;

public class ExampleController {

    public static String renderHelloWorld(Request req, Response res){
        return "HelloWorld";
    }
}
