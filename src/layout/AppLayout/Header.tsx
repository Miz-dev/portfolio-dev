import React from "react";
import Link from "next/link";
import { DarkModeIcon } from "src/component/Icon/DarkModeIcon";

const NAV_ITEMS = [
	{ href: "/about", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/contact", label: "Contact" },
];

export const Header = () => {
	return (
		<header className="mx-auto flex h-16 w-full max-w-[992px] items-center justify-center md:justify-between">
			<div>
				<Link href="/">
					<a>
						<h1 className="font-sans text-lg font-bold">
							Shimabu IT University
						</h1>
					</a>
				</Link>
			</div>
			<nav className="hidden items-center font-sans font-bold md:flex">
				{NAV_ITEMS.map((item) => {
					return (
						<Link key={item.href} href={item.href}>
							<a className="mx-2 inline-block py-5 text-lg hover:text-blue-500 focus:text-blue-500 active:text-blue-500">
								{item.label}
							</a>
						</Link>
					);
				})}
				<DarkModeIcon />
			</nav>
		</header>
	);
};
