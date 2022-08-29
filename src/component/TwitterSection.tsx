import Image from "next/image";
import twitter_thumbnail from "src/asset/images/twitter_thumbnail.png";
import React from "react";
import { Button } from "src/component/Button";
import { Title } from "src/component/Title";

export const TwitterSection = () => {
	return (
		<section className="mb-16 w-full md:ml-20 md:mb-24 md:w-1/2">
			<Title>Twitter</Title>
			<ul>
				<li className="mb-14 flex">
					<div className="mr-4 min-w-[38px]">
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
					<div className="mr-4 min-w-[38px]">
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
					<div className="mr-4 min-w-[38px]">
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
				<Button>View on Twitter</Button>
			</div>
		</section>
	);
};
