// import Link from "next/link";
import portfolio_thumbnail from "src/asset/images/portfolio_thumbnail.png";
import Image from "next/image";
import React from "react";
import { Title } from "src/component/Title";

export const Portfolio = () => {
	return (
		<section className="mb-20 mt-10 w-[992px]">
			<Title>Portfolio</Title>
			<ul className="flex flex-wrap justify-between">
				<li className="mb-6 w-1/3">
					<Image src={portfolio_thumbnail} alt="" />
					<h3 className="mb-2 text-[22px]">IT KINGDOM</h3>
					<p className="mb-2">
						当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
					</p>
					<p className="text-bold text-gray-400">2021.10 - 2021.12</p>
				</li>
				<li className="mb-6 w-1/3">
					<Image src={portfolio_thumbnail} alt="" />
					<h3 className="mb-2 text-[22px]">IT KINGDOM</h3>
					<p className="mb-2">
						当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
					</p>
					<p className="text-bold text-gray-400">2021.10 - 2021.12</p>
				</li>
				<li className="mb-6 w-1/3">
					<Image src={portfolio_thumbnail} alt="" />
					<h3 className="mb-2 text-[22px]">IT KINGDOM</h3>
					<p className="mb-2">
						当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
					</p>
					<p className="text-bold text-gray-400">2021.10 - 2021.12</p>
				</li>
				<li className="mb-6 w-1/3">
					<Image src={portfolio_thumbnail} alt="" />
					<h3 className="mb-2 text-[22px]">IT KINGDOM</h3>
					<p className="mb-2">
						当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
					</p>
					<p className="text-bold text-gray-400">2021.10 - 2021.12</p>
				</li>
				<li className="mb-6 w-1/3">
					<Image src={portfolio_thumbnail} alt="" />
					<h3 className="mb-2 text-[22px]">IT KINGDOM</h3>
					<p className="mb-2">
						当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
					</p>
					<p className="text-bold text-gray-400">2021.10 - 2021.12</p>
				</li>
				<li className="mb-6 w-1/3">
					<Image src={portfolio_thumbnail} alt="" />
					<h3 className="mb-2 text-[22px]">IT KINGDOM</h3>
					<p className="mb-2">
						当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
					</p>
					<p className="text-bold text-gray-400">2021.10 - 2021.12</p>
				</li>
			</ul>
		</section>
	);
};

export default Portfolio;
