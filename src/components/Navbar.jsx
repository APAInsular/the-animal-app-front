import "../index.css";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { useState } from "react";

import { IoMenu } from "react-icons/io5";

import { FaHome, FaUser, FaDoorOpen } from "react-icons/fa";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	// cuando este hecho el back y las peticiones
	// {JSON.parse(localStorage.getItem("user")).type == "admin" ? (
	//     <MenuItem icon={<FaHome />} as={"a"} href="/mainadmin">
	//         Admin
	//     </MenuItem>
	// ) : (
	//     ""
	// )}

	return (
		<div className="flex justify-between p-2 bg-[#ffeb35] border-b-2 border-black sticky">
			<img src="/logo-animal.png" alt="logo" className="w-28 -m-4 ms-3" />
			<Menu>
				<MenuButton className="-m-5 me-3" onClick={() => setIsOpen(!isOpen)}>
					<IoMenu size={"3em"} />
				</MenuButton>
				<MenuList className=" -mt-4">
					<MenuItem icon={<FaHome />} as={"a"} href="/main">
						Inicio
					</MenuItem>
					<MenuItem icon={<FaUser />} as={"a"} href="/account">
						Mi Cuenta
					</MenuItem>
					<MenuItem icon={<FaDoorOpen />} as={"a"} href="/logout">
						Cerrar Sesion
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
}

export default Navbar;
