import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { client } from "src/libs/client";
import Blog from "src/pages/blog";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div className="mb-24 mt-10 w-[992px]">
				<article>
					<h1 className="mb-6 border-b border-gray-200 pb-5 text-left text-2xl font-bold">
						{props.title}
					</h1>
					<p className="text-bold mb-2 text-gray-400">
						{dayjs(props.publishedAt).format("YYYY.MM.DD")}
					</p>
					<div
						className="mb-2"
						dangerouslySetInnerHTML={{ __html: props.body }}
					></div>
				</article>
			</div>
		</>
	);
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
	const data = await client.getList({ endpoint: "blog" });
	const ids = data.contents.map((content) => `/blog/${content.id}`);
	return {
		paths: ids,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
	ctx
) => {
	if (!ctx.params) {
		return { notFound: true };
	}

	const data = await client.getListDetail<Blog>({
		endpoint: "blog",
		contentId: ctx.params.id,
	});

	return {
		props: data,
	};
};

export default BlogId;
