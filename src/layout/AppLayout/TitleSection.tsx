import Link from "next/link";
import React from "react";

export const TitleSection = () => {
	return (
		<div className="w-full bg-pink-600 py-20">
			<div className="mx-auto flex w-[992px] items-center justify-between">
				<div>
					<p className="mb-2 text-4xl font-bold text-white">
						Shimabu IT University
					</p>
					<p className="text-4 text-white">
						Mizのポートフォリオのためのページです
					</p>
				</div>
				<div>
					<Link href="/">
						<a className="text-4 text-white">T</a>
					</Link>
					<Link href="/">
						<a className="text-4 text-white">F</a>
					</Link>
					<Link href="/">
						<a className="text-4 text-white">R</a>
					</Link>
				</div>
			</div>
		</div>
	);
};
