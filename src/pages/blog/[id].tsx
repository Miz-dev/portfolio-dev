// import Link from "next/link";
import Head from "next/head";
import React from "react";

export const BlogId = (props: any) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div className="mb-24 mt-10 w-[992px]">
				<article>
					<h1 className="mb-6 border-b border-gray-200 pb-5 text-left text-2xl font-bold">
						{/* {props.title} */}
						This is a header
					</h1>
					<p className="text-bold text-gray-400">2022.07.11</p>
					<p className="mb-2">
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit.
					</p>
				</article>
			</div>
		</>
	);
};

export default BlogId;
