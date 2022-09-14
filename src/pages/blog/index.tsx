// import Link from "next/link";
import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { Title } from "src/component/Title";
import { client } from "src/libs/client";

export type Blog = {
	title: string;
	body: string;
};

type Props = MicroCMSListResponse<Blog>;

export const Blog = (props: Props) => {
	return (
		<section className="mx-auto mt-10 mb-16 w-full px-4 lg:mb-24 lg:w-[992px] lg:px-0">
			<Title>Blog</Title>
			<ul>
				{props.contents.map((content) => {
					return (
						<li className="mb-6" key={content.id}>
							<Link href={`/blog/${content.id}`}>
								<a className="hover:text-gray-400">
									<h3 className="mb-2 text-[22px]">{content.title}</h3>
									<p
										className="mb-2"
										dangerouslySetInnerHTML={{ __html: content.body }}
									></p>
									<p className="text-bold text-gray-400">
										{dayjs(content.publishedAt).format("YYYY.MM.DD")}
									</p>
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await client.getList({ endpoint: "blog" });
	return {
		props: data,
	};
};

export default Blog;
