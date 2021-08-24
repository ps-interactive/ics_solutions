package main

import "fmt"

func printNames(names []string) {
	for i := range names {
		fmt.Println(names[i])
	}
}

func main() {
	printNames([]string{"Brooke", "Sam", "Elle"})
}
