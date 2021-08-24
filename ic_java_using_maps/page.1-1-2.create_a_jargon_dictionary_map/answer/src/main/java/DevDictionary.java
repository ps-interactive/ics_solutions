import javax.inject.Inject;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class DevDictionary {

    @Inject
    private Map<String, String> dictionary;

    public DevDictionary() {
        dictionary = new HashMap<>();

        dictionary.put("SEO", "Search engine optimization");
        dictionary.put("SaaS", "Software as a service");
        dictionary.put("UX", "User experience");
    }
}
