import Link from "next/link";
import React from "react";
import { Button } from "src/component/Button";

export const BlogSection = () => {
	return (
		<section className="mx-auto mb-24 w-[992px]">
			<h2 className="mb-6 border-b border-gray-200 pb-5 text-left text-2xl font-bold">
				Blog
			</h2>
			<ul>
				<li className="mb-6">
					<Link href={`/blog`}>
						<a className="hover:text-gray-400">
							<h3 className="mb-2 text-[22px]">This is a header</h3>
							<p className="mb-2">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
							<p className="text-bold text-gray-400">2022.07.11</p>
						</a>
					</Link>
				</li>
				<li className="mb-6">
					<Link href={`/blog`}>
						<a className="hover:text-gray-400">
							<h3 className="mb-2 text-[22px]">This is a header</h3>
							<p className="mb-2">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
							<p className="text-bold text-gray-400">2022.07.11</p>
						</a>
					</Link>
				</li>
				<li className="mb-6">
					<Link href={`/blog`}>
						<a className="hover:text-gray-400">
							<h3 className="mb-2 text-[22px]">This is a header</h3>
							<p className="mb-2">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
							<p className="text-bold text-gray-400">2022.07.11</p>
						</a>
					</Link>
				</li>
				<li className="mb-6">
					<Link href={`/blog`}>
						<a className="hover:text-gray-400">
							<h3 className="mb-2 text-[22px]">This is a header</h3>
							<p className="mb-2">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
							<p className="text-bold text-gray-400">2022.07.11</p>
						</a>
					</Link>
				</li>
				<li className="mb-6">
					<Link href={`/blog`}>
						<a className="hover:text-gray-400">
							<h3 className="mb-2 text-[22px]">This is a header</h3>
							<p className="mb-2">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
							<p className="text-bold text-gray-400">2022.07.11</p>
						</a>
					</Link>
				</li>
			</ul>
			<div className="text-center">
				<Button>View All</Button>
			</div>
		</section>
	);
};
