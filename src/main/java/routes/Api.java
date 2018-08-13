package routes;

import modules.example.ExampleController;

import static spark.Spark.get;
import static spark.Spark.path;
import static spark.Spark.port;

public class Api {

    public Api() {
        init();
    }


    private void init() {
        port(8181);
        path("/api", () -> {
            path("/example", () -> {
                get("/hello", (req, res) -> ExampleController.renderHelloWorld(req, res));
                //insert as group
            });
        });
    }

}
