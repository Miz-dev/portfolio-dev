import React from "react";
import { Title } from "src/component/Title";

export const Contact = () => {
	return (
		<section className="mx-auto mt-10 mb-16 w-full px-4 lg:mb-24 lg:w-[992px] lg:px-0">
			<Title>Contact</Title>
			<p className="mb-1 text-sm font-semibold">Email</p>
			<input
				className="mb-7 w-full rounded-sm border border-gray-400 p-2"
				type="text"
				placeholder="your@email.com"
			/>
			<p className="mb-1 text-sm font-semibold">Name</p>
			<input
				className="mb-7 w-full rounded-sm border border-gray-400 p-2"
				type="text"
				placeholder="Taro Yamada"
			/>
			<p className="mb-1 text-sm font-semibold">Email</p>
			<textarea
				className="mb-7 w-full rounded-sm border border-gray-400 p-2"
				name=""
				id=""
				placeholder="I want to order your goods"
			></textarea>
			<div className="text-center">
				<button className="rounded-full bg-black px-5 py-2 text-white">
					Send message
				</button>
			</div>
		</section>
	);
};

export default Contact;
