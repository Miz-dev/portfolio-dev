import React from "react";
import Link from "next/link";

export const Button = (props: any) => {
	const { children } = props;
	return (
		<button className="rounded-full bg-black px-5 py-2 text-white">
			<Link href={"blog"}>
				<a>{children}</a>
			</Link>
		</button>
	);
};
