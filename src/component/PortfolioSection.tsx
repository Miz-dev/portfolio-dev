import Image from "next/image";
import portfolio_thumbnail from "src/asset/images/portfolio_thumbnail.png";
import React from "react";
import { Button } from "src/component/Button/Button";

export const PortfolioSection = () => {
	return (
		<section className="mx-auto mb-24 w-[992px]">
			<h2 className="mb-6 border-b border-gray-200 pb-5 text-left text-2xl font-bold">
				Portfolio
			</h2>
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
			<div className="text-center">
				<Button>View All</Button>
			</div>
		</section>
	);
};
