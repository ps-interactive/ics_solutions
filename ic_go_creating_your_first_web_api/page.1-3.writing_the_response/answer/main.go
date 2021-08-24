package main

import (
	"fmt"
	"net/http"
)

func main() {}

func messageHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello Go")
}
