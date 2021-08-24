package main

import "fmt"

func main() {
	if text := "Golang"; len(text) > 10 {
		fmt.Println("Yes,", text)
	} else {
		fmt.Println("No,", text)
	}
	text := "is awesome"
	fmt.Println(text)
}
