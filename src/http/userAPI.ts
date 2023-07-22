import jwtDecode from "jwt-decode";
import { $authHost, $host } from "./index";

export const registration = async (username: string, email: string, password: string) => {
    const { data } = await $host.post("api/user/registration", {username, email, password, role: "ADMIN" });
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
}


export const login = async (email: string, password: string) => {
    const { data } = await $host.post("api/user/login", { email, password });
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
}

export const check = async () => {
    const { data } = await $authHost.get("api/user/auth");
    localStorage.setItem("token", data.token);
    return data;
}
