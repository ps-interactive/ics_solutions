package main

import "fmt"

func printScores(scores []int) {
	for i, score := range scores {
		fmt.Println(i)
		fmt.Println(score)
	}
}

func main() {
	printScores([]int{42, 112, 250})
}
