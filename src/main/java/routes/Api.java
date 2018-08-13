package routes;

import static spark.Spark.get;

public class Api {

    public Api() {
        init();
    }


    private void init() {

        get("/hello", (req, res) -> "Hello World");

    }

}
