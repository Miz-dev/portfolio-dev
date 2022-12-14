import type { NextPage } from "next";
import { BlogSection } from "src/component/BlogSection";
import { GithubSection } from "src/component/GithubSection";
import { PortfolioSection } from "src/component/PortfolioSection";
import { TitleSection } from "src/component/TitleSection";
import { TwitterSection } from "src/component/TwitterSection";

const Home: NextPage = (props) => {
	return (
		<>
			<TitleSection />
			<BlogSection />
			<PortfolioSection />
			<div className="mx-auto w-full px-4 md:flex lg:mb-24 lg:w-[992px] lg:px-0">
				<GithubSection />
				<TwitterSection />
			</div>
		</>
	);
};

export default Home;
