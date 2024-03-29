package controllers;

import module.WiseWords;
import play.*;
import play.mvc.*;

import views.html.*;

import java.util.ArrayList;
import java.util.List;

public class Application extends Controller {


    public static Result index() {
        return ok(index.render(""));
    }

    public static Result wiseWordsAt(String id) {
        return ok(index.render(""));
    }

    public static Result wiseWords(String current_number_of_wise_words) {
        return ok(WiseWords.getWiseWordsAt(Integer.parseInt(current_number_of_wise_words)));
    }
}
