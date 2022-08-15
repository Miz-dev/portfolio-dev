import Image from "next/image";
import twitter_thumbnail from "src/asset/images/twitter_thumbnail.png";
import Link from "next/link";
import React from "react";

export const TwitterSection = () => {
	return (
		<section className="mb-24 ml-20">
			<h2 className="mb-6 border-b border-gray-200 pb-5 text-left text-2xl font-bold">
				Twitter
			</h2>
			<ul>
				<li className="mb-14 flex">
					<div className="mr-4 w-10">
						<Image src={twitter_thumbnail} alt="" />
					</div>
					<div>
						<div className="mb-2 flex items-center">
							<h3 className="mr-2 text-lg">しまぶーのIT大学</h3>
							<span>@shimabu_it・5月25日</span>
						</div>
						<p className="mb-2">
							📣 新サービス「Noway Form」をリリースしました！
							<br />
							<br />
							Noway
							Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
							FormsでやっていたことがNotionだけで完結します✌✨
							<br />
							<br />
							試しに使っていただけると幸いです😊
							<br />
							<br />
							<span className="text-blue-400">
								https://www.noway-form.com/ja
							</span>
						</p>
					</div>
				</li>
				<li className="mb-14 flex">
					<div className="mr-4 w-10">
						<Image src={twitter_thumbnail} alt="" />
					</div>
					<div>
						<div className="mb-2 flex items-center">
							<h3 className="mr-2 text-lg">しまぶーのIT大学</h3>
							<span>@shimabu_it・5月25日</span>
						</div>
						<p className="mb-2">
							📣 新サービス「Noway Form」をリリースしました！
							<br />
							<br />
							Noway
							Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
							FormsでやっていたことがNotionだけで完結します✌✨
							<br />
							<br />
							試しに使っていただけると幸いです😊
							<br />
							<br />
							<span className="text-blue-400">
								https://www.noway-form.com/ja
							</span>
						</p>
					</div>
				</li>
				<li className="mb-14 flex">
					<div className="mr-4 w-10">
						<Image src={twitter_thumbnail} alt="" />
					</div>
					<div>
						<div className="mb-2 flex items-center">
							<h3 className="mr-2 text-lg">しまぶーのIT大学</h3>
							<span>@shimabu_it・5月25日</span>
						</div>
						<p className="mb-2">
							📣 新サービス「Noway Form」をリリースしました！
							<br />
							<br />
							Noway
							Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
							FormsでやっていたことがNotionだけで完結します✌✨
							<br />
							<br />
							試しに使っていただけると幸いです😊
							<br />
							<br />
							<span className="text-blue-400">
								https://www.noway-form.com/ja
							</span>
						</p>
					</div>
				</li>
			</ul>
			<div className="text-center">
				<button className="rounded-full bg-black px-5 py-2 text-white">
					View on Twitter
				</button>
			</div>
		</section>
	);
};
