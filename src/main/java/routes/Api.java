package routes;

import static spark.Spark.get;
import static spark.Spark.port;

public class Api {

    public Api() {
        init();
    }


    private void init() {
        port(8181);
        get("/hello", (req, res) -> "Hello World");

    }

}
