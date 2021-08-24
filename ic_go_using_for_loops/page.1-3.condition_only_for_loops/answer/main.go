package main

import "fmt"

func printWeekCount(weekCount int, isCurrentMonth bool) {
	for isCurrentMonth {
		if weekCount >= 4 {
			isCurrentMonth = false
		}
		fmt.Println(weekCount)
		weekCount++
	}
}

func main() {
	printWeekCount(1, true)
}
