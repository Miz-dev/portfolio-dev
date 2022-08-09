import React from "react";
import { Header } from "src/layout/AppLayout/Header";

export const AppLayout = (props: any) => {
	return (
		<div className="mx-auto flex min-h-screen flex-col items-center px-2">
			<Header />
			{props.children}
		</div>
	);
};
