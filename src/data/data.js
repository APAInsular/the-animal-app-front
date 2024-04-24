// ahora cuando se vaya a hacer una peticion se usa este texto y cuando se cambie a despliegue solo hay que cambiar estos textos
const mainLink = "http://localhost";
const cookieLink = mainLink + "/sanctum/csrf-cookie";
const loginLink = mainLink + "/api/v1/login"
const passwordLink = mainLink + "/api/v1/updatepassword";
const logoutLink = mainLink + "/api/v1/logout"

export {mainLink, cookieLink, loginLink, passwordLink, logoutLink}