package controllers;

import module.WiseWords;
import play.*;
import play.mvc.*;

import views.html.*;

import java.util.ArrayList;
import java.util.List;

public class Application extends Controller {
    private static List<String> wise_words;


    public static Result index() {
        return ok(index.render("Your new application is ready."));
    }

    public static Result wiseWords(String current_number_of_wise_words) {
        System.out.println("HAHA");
        System.out.println(current_number_of_wise_words);
        List<String> wiseWords = WiseWords.getWiseWords();
        return ok(wiseWords.get(Integer.parseInt(current_number_of_wise_words)));
    }

    private static void fill_wise_words() {

    }
}
