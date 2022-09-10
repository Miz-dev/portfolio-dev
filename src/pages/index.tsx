import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Button } from "src/component/Button";
// import { BlogSection } from "src/component/BlogSection";
import { GithubSection } from "src/component/GithubSection";
import { PortfolioSection } from "src/component/PortfolioSection";
import { Title } from "src/component/Title";
import { TitleSection } from "src/component/TitleSection";
import { TwitterSection } from "src/component/TwitterSection";
import { client } from "src/libs/client";
import Blog from "src/pages/blog";

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
	return (
		<>
			<TitleSection />
			{/* <BlogSection /> */}
			<section className="mx-auto mb-16 w-full px-4 lg:mb-24 lg:w-[992px] lg:px-0">
				<Title>Blog</Title>
				<ul>
					{props.contents.map((content) => {
						return (
							<li className="mb-6" key={content.id}>
								<Link href={`/blog/${content.id}`}>
									<a className="hover:text-gray-400">
										<h3 className="mb-2 text-[22px]">{content.title}</h3>
										<div
											className="mb-2"
											dangerouslySetInnerHTML={{ __html: content.body }}
										></div>
										<p className="text-bold text-gray-400">
											{dayjs(content.publishedAt).format("YYYY.MM.DD")}
										</p>
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
				<div className="text-center">
					<Button>View All</Button>
				</div>
			</section>
			<PortfolioSection />
			<div className="mx-auto w-full px-4 md:flex lg:mb-24 lg:w-[992px] lg:px-0">
				<GithubSection />
				<TwitterSection />
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await client.getList({ endpoint: "blog" });
	console.log(data);
	return {
		props: data,
	};
};

export default Home;
