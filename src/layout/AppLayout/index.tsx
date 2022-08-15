import React from "react";
import { Footer } from "src/layout/AppLayout/Footer";
import { Header } from "src/layout/AppLayout/Header";

export const AppLayout = (props: any) => {
	return (
		<div className="mx-auto flex min-h-screen flex-col items-center">
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};
