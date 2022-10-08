package main

import (
	"main/server"
)

func main() {
	server.InitialiseRoutes()
	server.Run(":8000")
}
