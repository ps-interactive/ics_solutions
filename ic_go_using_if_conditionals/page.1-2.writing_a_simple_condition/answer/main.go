package main

import "fmt"

func printMessage(text string) {
	if len(text) > 10 {
		fmt.Println(text)
	} else {
		fmt.Println("Still awesome")
	}
}

func main() {
	printMessage("Golang is awesome")
}
