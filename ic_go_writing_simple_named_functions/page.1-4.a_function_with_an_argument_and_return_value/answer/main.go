package main

import (
	"fmt"
	"time"
)

func main() {
	age := calculateAge(1970)
	fmt.Println(age)
}

func calculateAge(yob int) int {
	currentYear := time.Now().Year()
	return currentYear - yob
}
