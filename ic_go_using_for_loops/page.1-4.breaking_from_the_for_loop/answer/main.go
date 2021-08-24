package main

import "fmt"

func printMonthCount(monthCount int) {
	for {
		if monthCount > 5 {
			break
		}
		fmt.Println(monthCount)
		monthCount++
	}
}

func main() {
	printMonthCount(1)
}
