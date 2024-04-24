import axios from "axios";
import { useEffect, useState } from "react";
import { cookieLink } from "../data/data";

export default function useAxios(type, URL, content = null) {

    const [cookie, setCookie] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const userToken = JSON.parse(localStorage.getItem("Bearer"))


    useEffect(() => {
        // aqui la peticion para los codigos CSRF
        axios.get(cookieLink).then(function (response) {
            setCookie(response);
        })
        //
        switch(type) {
            case "GET":
                axios.get(URL, {
                    headers: {
                        // headers
                        "X-CSRF-TOKEN": cookie,
                        "Authorization": `Bearer ${userToken}`,
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    setResponseData(response);
                })
                break;

            case "POST":
                axios.post(URL, content, {
                    headers : {
                        "X-CSRF-TOKEN": cookie,
                        "Authorization": `Bearer ${userToken}`,
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    setResponseData(response)
                })
                break;

            case "PUT":
                axios.put(URL, content, {
                    headers: {
                        "X-CSRF-TOKEN": cookie,
                        "Authorization": `Bearer ${userToken}`,
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    setResponseData(response)
                })
                break;

            case "PATCH":
                axios.patch(URL, content, {
                    headers: {
                        "X-CSRF-TOKEN": cookie,
                        "Authorization": `Bearer ${userToken}`,
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    setResponseData(response)
                })
                break;

            case "DELETE":
                axios.delete(URL, {
                    headers: {
                        "X-CSRF-TOKEN": cookie,
                        "Authorization": `Bearer ${userToken}`,
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    setResponseData(response)
                })
                break;

            default:
                throw new Error(`Unsupported request type: ${type}`);

        }
    },[URL, type, content])


    return [responseData];
}