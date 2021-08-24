import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class StoreInventory {
    Set<String> superCycleSet = new TreeSet<>();
    List<String> myStoreList = new ArrayList<>();

    public StoreInventory() {
        myStoreList.add("Bicycle");
        myStoreList.add("Tricycle");
        myStoreList.add("Scooter");
    }

    public void printStoreInventory() {
        myStoreList.forEach(i -> System.out.println("My Store item: " + i));
    }

    public void collectCycleItems() {
        // Task 1
        myStoreList.forEach(i-> {
            if (i.contains("cycle"))
                superCycleSet.add(i);
        });

        // Task 2
        superCycleSet.forEach(i -> System.out.println("Super Cycle item: " + i));
    }
}
