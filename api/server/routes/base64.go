package routes

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
)

func DecodeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {

		var body string

		if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
			fmt.Printf("[error decoding] - %v \n", err)
		}
		decoded, err := base64.StdEncoding.DecodeString(body)

		if err != nil {
			fmt.Printf("error decoding - %v \n", err)
		}

		response, err := json.Marshal(map[string]string{
			"message": string(decoded),
		})

		if err != nil {
			fmt.Printf("error marshal - %v \n", err)
		}

		w.Write(response)

	}
}

func EncodeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var body string

		if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
			fmt.Printf("[error encoding] - %v \n", err)
		}

		encoded := base64.StdEncoding.EncodeToString([]byte(body))

		response, err := json.Marshal(map[string]string{
			"message": encoded,
		})
		if err != nil {
			fmt.Printf("error encode response - %v \n", err)
		}

		w.Write(response)
	}
}
