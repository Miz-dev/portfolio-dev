import Link from "next/link";
import React from "react";
import { FacebookIcon } from "src/component/Icon/FacebookIcon";
import { RssIcon } from "src/component/Icon/Rss";
import { TwitterIcon } from "src/component/Icon/TwitterIcon";
import classes from "./TitleSection.module.css";

export const TitleSection = () => {
	return (
		<section className={classes.titleSectionWrap}>
			<div className="mx-auto flex w-[992px] items-center justify-between py-20">
				<div>
					<p className="mb-2 text-4xl font-bold text-white">
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
