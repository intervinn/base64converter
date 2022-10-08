package server

import (
	"fmt"
	"main/server/routes"
	"net/http"
)

func InitialiseRoutes() {
	http.HandleFunc("/decode", routes.DecodeHandler)
	http.HandleFunc("/encode", routes.EncodeHandler)
}

func Run(port string) {
	if err := http.ListenAndServe(port, nil); err != nil {
		fmt.Printf("[eror listen serve] - %v \n", err)
	}
}
