"use client";
import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
const links = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Contact",
		path: "/contact",
	},
	{
		title: "Blog",
		path: "/blog",
	},
];
const Links = () => {
	const [open, setOpen] = useState(false);

	// Temporary
	const session = true;
	const isAdmin = true;

	return (
		<div className={styles.contaier}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavLink item={link} key={link.title} />
				))}
				{session ? (
					<>
						{isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
						<button type="button" className={styles.logout}>
							Logout
						</button>
					</>
				) : (
					<NavLink item={{ title: "Login", path: "/admin" }} />
				)}
			</div>
			<Image
				className={styles.menuButton}
				src="/menu.png"
				width={30}
				height={30}
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLink item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
