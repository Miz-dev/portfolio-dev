import Link from "next/link";
import React from "react";
import { FacebookIcon } from "src/component/Icon/FacebookIcon";
import { RssIcon } from "src/component/Icon/Rss";
import { TwitterIcon } from "src/component/Icon/TwitterIcon";

export const TitleSection = () => {
	return (
		<section className="mb-10 w-full bg-[#e64980] md:mb-20">
			<div className="mx-auto w-full items-center justify-between px-4 pt-14 pb-16 md:flex md:py-20 lg:w-[992px] lg:px-0">
				<div className="mb-10 md:mb-0">
					<p className="mb-1 text-[28px] font-bold text-white md:mb-2 md:text-4xl">
						Shimabu IT University
					</p>
					<p className="text-4 text-white">
						Mizのポートフォリオのためのページです
					</p>
				</div>
				<div className="flex items-center">
					<TwitterIcon />
					<FacebookIcon />
					<RssIcon />
				</div>
			</div>
		</section>
	);
};
