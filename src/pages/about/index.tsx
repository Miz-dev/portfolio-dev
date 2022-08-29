import React from "react";
import { Title } from "src/component/Title";

export const About = () => {
	return (
		<section className="mx-auto mt-10 mb-16 w-full px-4 lg:mb-24 lg:w-[992px] lg:px-0">
			<Title>About</Title>
			<h3 className="text-bold mb-6 text-xl">Lightsound Shimabu </h3>
			<p>
				ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
			</p>
		</section>
	);
};

export default About;
