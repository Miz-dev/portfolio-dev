import React from "react";
import { Header } from "src/layout/AppLayout/Header";
import { TitleSection } from "src/layout/AppLayout/TitleSection";

export const AppLayout = (props: any) => {
	return (
		<div className="mx-auto flex min-h-screen flex-col items-center">
			<Header />
			<TitleSection />
			{props.children}
		</div>
	);
};
