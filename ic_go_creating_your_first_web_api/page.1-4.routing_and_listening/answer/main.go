package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", messageHandler)
	http.ListenAndServe(":8080", nil)
}

func messageHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello Go")
}
