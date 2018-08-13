package routes;

import modules.example.ExampleController;

import static spark.Spark.get;
import static spark.Spark.path;



public class Api {

    public Api() {
        init();
    }


    private void init() {

        path("/api", () -> {
            path("/example", () -> {
                get("/hello", (req, res) -> ExampleController.renderHelloWorld(req, res));
                //insert as group
            });
        });

    }

}
