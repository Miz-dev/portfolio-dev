import React from "react";
import { Footer } from "src/layout/AppLayout/Footer";
import { Header } from "src/layout/AppLayout/Header";
import { TitleSection } from "src/component/TitleSection";
import { BlogSection } from "src/component/BlogSection";
import { PortfolioSection } from "src/component/PortfolioSection";
import { GithubSection } from "src/component/GithubSection";
import { TwitterSection } from "src/component/TwitterSection";

export const AppLayout = (props: any) => {
	return (
		<div className="mx-auto flex min-h-screen flex-col items-center">
			<Header />
			<TitleSection />
			<BlogSection />
			<PortfolioSection />
			<div className="mx-auto flex w-[992px]">
				<GithubSection />
				<TwitterSection />
			</div>
			{/* {props.children} */}
			<Footer />
		</div>
	);
};
