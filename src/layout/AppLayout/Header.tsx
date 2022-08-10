import React from "react";
import Link from "next/link";

const NAV_ITEMS = [
	{ href: "/about", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/contact", label: "Contact" },
];

export const Header = () => {
	return (
		<header className="flex h-16 w-[992px] items-center justify-between">
			<div>
				<Link href="/">
					<a>
						<h1 className="font-sans text-lg font-bold">
							Shimabu IT University
						</h1>
					</a>
				</Link>
			</div>
			<nav className="flex items-center font-sans font-bold">
				{NAV_ITEMS.map((item) => {
					return (
						<Link key={item.href} href={item.href}>
							<a className="mx-2 inline-block py-5 text-lg hover:text-blue-500 focus:text-blue-500 active:text-blue-500">
								{item.label}
							</a>
						</Link>
					);
				})}
				<Link href="/">
					<a className="ml-2">
						<svg
							width="34"
							height="35"
							viewBox="0 0 34 35"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="0.5"
								y="1"
								width="33"
								height="33"
								rx="7.5"
								fill="white"
							/>
							<path
								d="M17.0001 9.25001C17.1211 9.25001 17.2411 9.25001 17.3603 9.25001C16.1827 10.3442 15.4258 11.8165 15.2211 13.411C15.0164 15.0054 15.3769 16.6211 16.2399 17.9773C17.1029 19.3336 18.4139 20.3445 19.9449 20.8344C21.476 21.3242 23.1303 21.2621 24.6203 20.6588C24.0471 22.038 23.1104 23.2356 21.9099 24.1241C20.7094 25.0125 19.2903 25.5585 17.8039 25.7036C16.3175 25.8488 14.8195 25.5877 13.4699 24.9483C12.1202 24.3089 10.9694 23.3151 10.1403 22.0729C9.31111 20.8307 8.83471 19.3868 8.76187 17.8951C8.68902 16.4034 9.02247 14.9199 9.72664 13.6028C10.4308 12.2858 11.4793 11.1846 12.7603 10.4167C14.0412 9.6488 15.5066 9.24304 17.0001 9.24268V9.25001Z"
								stroke="#25262B"
								strokeWidth="1.83333"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<rect
								x="0.5"
								y="1"
								width="33"
								height="33"
								rx="7.5"
								stroke="#C1C2C5"
							/>
						</svg>
					</a>
				</Link>
			</nav>
		</header>
	);
};
