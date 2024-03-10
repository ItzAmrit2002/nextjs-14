"use client";
import styles from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
	const pathnName = usePathname();
	return (
		<div className={styles.container}>
			<Link
				href={item.path}
				className={`${styles.container} ${
					pathnName === item.path && styles.active
				}`}>
				{item.title}
			</Link>
		</div>
	);
};

export default NavLink;
