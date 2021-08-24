package main

import "fmt"

func printScores(scores []int) {
	for _, score := range scores {
		fmt.Println(score)
	}
}

func main() {
	printScores([]int{42, 112, 250})
}
