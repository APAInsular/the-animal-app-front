import axios from "axios";
// ahora cuando se vaya a hacer una peticion se usa este texto y cuando se cambie a despliegue solo hay que cambiar estos textos
const mainLink = "http://localhost:8000";
const cookieLink = mainLink + "/sanctum/csrf-cookie";
const loginLink = mainLink + "/api/login"
const passwordLink = mainLink + "/api/updatepassword";
const logoutLink = mainLink + "/api/logout"
const getVolunteers = mainLink + "/api/voluntarios";
const pieChartVolunteerData = mainLink + "/api/v1/datos-voluntarios" ;
const getCsrfToken = async () => {
    const csrfResponse = await axios.get(cookieLink);
    return csrfResponse.data; // Access data property for CSRF response
};

export {mainLink, cookieLink, loginLink, passwordLink, logoutLink, pieChartVolunteerData, getVolunteers, getCsrfToken}