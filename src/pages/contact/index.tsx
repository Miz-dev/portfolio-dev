import React from "react";

export const Contact = () => {
	return (
		<section className="mb-24 mt-10 w-[992px]">
			<h2 className="mb-6 border-b border-gray-200 pb-5 text-left text-2xl font-bold">
				Contact
			</h2>
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
				// cols="30"
				// rows="10"
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
