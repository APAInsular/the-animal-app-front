import axios from "axios";
// ahora cuando se vaya a hacer una peticion se usa este texto y cuando se cambie a despliegue solo hay que cambiar estos textos
const mainLink = "http://localhost:8000";
const cookieLink = mainLink + "/sanctum/csrf-cookie";
const loginLink = mainLink + "/api/login"
const passwordLink = mainLink + "/api/updatepassword";
const logoutLink = mainLink + "/api/logout"
const getAllUsers = mainLink + "/api/users" ;
const getVolunteers = mainLink + "/api/voluntarios";
const updateVolunteer = mainLink  + "/api/voluntarios/";
const getPadrinos = mainLink + "/api/padrino";
const updatePadrinos = mainLink + "/api/padrino/"
const getAnimales = mainLink + "/api/animal";
const updateAnimales = mainLink + "/api/animal"
const getTareas = mainLink + "/api/tareas";
const updateTareas = mainLink + "/api/tareas/"
const createUser = mainLink + "/api/createUser";
const updateUser = mainLink + "/api/user/";
const getEspecies = mainLink + "/api/especies";
const getFormacion = mainLink + "/api/formacion"
const pieChartVolunteerData = mainLink + "/api/datos-voluntarios" ;
const animalsLink = mainLink + "/api/animal/"
const volunteerTasks = mainLink + "/api/voluntarios/tareas/"
const alimentacionesLink = mainLink + "/api/alimentaciones";
const cuidadosLink = mainLink + "/api/cuidados";
const necesidadesLink = mainLink + "/api/necesidades";

const getCsrfToken = async () => {
    const csrfResponse = await axios.get(cookieLink);
    return csrfResponse.data; // Access data property for CSRF response
};

export {mainLink, cookieLink, loginLink, passwordLink, logoutLink, getAllUsers, pieChartVolunteerData, updateVolunteer, getVolunteers, getPadrinos, updatePadrinos, getAnimales, updateAnimales, getTareas, updateTareas, createUser, getEspecies, getFormacion, animalsLink, volunteerTasks, alimentacionesLink, updateUser, cuidadosLink, necesidadesLink, getCsrfToken}