import java.util.Map;
import java.util.TreeMap;

public class FruitStand {
    private Map<String, Integer> prices = new TreeMap<>();

    public FruitStand(){
        prices.put("Apple", 1);
        prices.put("Avocado", 2);
        prices.put("Banana", 1);
        prices.put("Mango", 2);
        prices.put("Starfruit", 4);
    }

    public void printPrices() {
        prices.forEach((key, value) -> System.out.println("Fruit: " + key + ", $" + value));
    }
}
