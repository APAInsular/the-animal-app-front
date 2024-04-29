import "../index.css";

import { useState } from "react";
import {
	RiHome2Line,
	RiAccountCircleLine,
	RiLogoutBoxLine,
} from "react-icons/ri";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	// cuando este hecho el back y las peticiones
	// {JSON.parse(localStorage.getItem("user")).type == "admin" ? (
	//     <MenuItem icon={<FaHome />} as={"a"} href="/mainadmin">
	//         Admin
	//     </MenuItem>
	// ) : (
	//     ""
	// )}

	return (
		<div className="drawer ">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col ">
				{/* Navbar */}
				<div className="w-full navbar bg-yellow-200 border-b-2 border-black">
					<div className="flex-none lg:hidden">
						<label
							htmlFor="my-drawer-3"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-6 h-6 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					<div className="flex-1 px-2 mx-2">
						<a href="/">
							<img
								src="/logo-animal-large.png"
								alt="logo"
								className="w-20 h-auto"
							/>
						</a>
					</div>
					<div className="flex-none hidden lg:block">
						<ul className="menu menu-horizontal">
							{/* Navbar menu content here */}
							<a
								href="/main"
								className="text-black mx-4 text-xl  italic font-bold uppercase hover:text-gray-500"
							>
								INICIO
							</a>
							<div className="dropdown dropdown-end">
								<div tabIndex={0} role="button" className="">
									<a
										className="text-black mx-4 text-xl  italic font-bold uppercase hover:text-gray-500"
									>
										YERAY SANTANA CURBELO
									</a>
								</div>
								<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
									<li>
										<a className="justify-between" href="/account">
										<RiAccountCircleLine className=""/> Mi Cuenta
											<span className="badge">New</span>
										</a>
									</li>
									<li><a> <RiLogoutBoxLine className="mr-2" />Cerrar Sesión</a></li>
								</ul>
							</div>
						</ul>
					</div>
				</div>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-3"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu p-4 w-80 min-h-full bg-yellow-100">
					<div className="drawer-header  py-4 px-6">
						<a
							href="/account"
							className="text-black mx-3 my-2 text-xl flex items-center"
						>
							<RiAccountCircleLine className="mr-3" /> YERAY SANTANA
						</a>
						<div className="h-px bg-gray-300 my-2"></div>
					</div>
					{/* Sidebar content here */}
					<a
						href="/main"
						className="text-black mx-4 my-2 text-xl hover:text-gray-400 flex items-center"
					>
						<RiHome2Line className="mr-2" /> Inicio
					</a>
					<a
						href="/account"
						className="text-black mx-4 my-2 text-xl hover:text-gray-400 flex items-center"
					>
						<RiAccountCircleLine className="mr-2" /> Mi Cuenta
					</a>
					<a
						href="/"
						className="text-black mx-4 my-2 text-xl hover:text-gray-400 flex items-center"
					>
						<RiLogoutBoxLine className="mr-2" /> Cerrar Sesión
					</a>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
