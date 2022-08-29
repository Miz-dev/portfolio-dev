import React, { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
	children: ReactNode;
};

export const Button = (props: ButtonProps) => {
	const { children } = props;

	return (
		<button className="rounded-full bg-black px-5 py-2 text-white">
			<Link href={""}>
				<a>{children}</a>
			</Link>
		</button>
	);
};
