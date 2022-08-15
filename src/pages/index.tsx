import type { NextPage } from "next";
import { BlogSection } from "src/component/BlogSection";
import { GithubSection } from "src/component/GithubSection";
import { PortfolioSection } from "src/component/PortfolioSection";
import { TitleSection } from "src/component/TitleSection";
import { TwitterSection } from "src/component/TwitterSection";
import { Footer } from "src/layout/AppLayout/Footer";
import { Header } from "src/layout/AppLayout/Header";

const Home: NextPage = (props) => {
	return (
		<div>
			{/* <Header /> */}
			<TitleSection />
			<BlogSection />
			<PortfolioSection />
			<div className="mx-auto flex w-[992px]">
				<GithubSection />
				<TwitterSection />
			</div>
			{/* {props.children} */}
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
