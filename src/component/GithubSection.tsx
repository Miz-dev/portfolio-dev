import Image from "next/image";
import github_bar from "src/asset/images/github_bar.png";
import React from "react";
import { Button } from "src/component/Button/Button";

export const GithubSection = () => {
	return (
		<section className="mb-24 mr-10 flex w-1/2 flex-col justify-between">
			<h2 className="mb-6 border-b border-gray-200 pb-5 text-left text-2xl font-bold">
				GitHub
			</h2>
			<ul>
				<li className="mb-10">
					<h3 className="mb-2 text-lg">lightsound/nexst-tailwind</h3>
					<p className="mb-2">Next.js starter template.</p>
					<div className="flex items-center">
						<p className="text-bold mr-5 flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00006 12.8125L4.37106 15.2462L5.25531 10.0915L1.50531 6.44121L6.68031 5.69121L8.99481 1.00146L11.3093 5.69121L16.4843 6.44121L12.7343 10.0915L13.6186 15.2462L9.00006 12.8125Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							117
						</p>
						<p className="text-bold flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="19"
								viewBox="0 0 18 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 15.5C9.82843 15.5 10.5 14.8284 10.5 14C10.5 13.1716 9.82843 12.5 9 12.5C8.17157 12.5 7.5 13.1716 7.5 14C7.5 14.8284 8.17157 15.5 9 15.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5C6.07843 6.5 6.75 5.82843 6.75 5C6.75 4.17157 6.07843 3.5 5.25 3.5C4.42157 3.5 3.75 4.17157 3.75 5C3.75 5.82843 4.42157 6.5 5.25 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12.75 6.5C13.5784 6.5 14.25 5.82843 14.25 5C14.25 4.17157 13.5784 3.5 12.75 3.5C11.9216 3.5 11.25 4.17157 11.25 5C11.25 5.82843 11.9216 6.5 12.75 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5V8C5.25 8.39782 5.40804 8.77936 5.68934 9.06066C5.97064 9.34196 6.35218 9.5 6.75 9.5H11.25C11.6478 9.5 12.0294 9.34196 12.3107 9.06066C12.592 8.77936 12.75 8.39782 12.75 8V6.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9 9.5V12.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							18
						</p>
					</div>
					<Image src={github_bar} alt="" />
					<div className="flex items-center">
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
							<span className="text-bold mr-1.5 text-xs">TypeScript</span>
							<span className="text-bold text-xs text-gray-500">65.5%</span>
						</div>
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-yellow-300"></span>
							<span className="text-bold mr-1.5 text-xs">JavaScript</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
						<div className="flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-gray-500"></span>
							<span className="text-bold mr-1.5 text-xs">Other</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
					</div>
				</li>
				<li className="mb-10">
					<h3 className="mb-2 text-lg">lightsound/nexst-tailwind</h3>
					<p className="mb-2">Next.js starter template.</p>
					<div className="flex items-center">
						<p className="text-bold mr-5 flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00006 12.8125L4.37106 15.2462L5.25531 10.0915L1.50531 6.44121L6.68031 5.69121L8.99481 1.00146L11.3093 5.69121L16.4843 6.44121L12.7343 10.0915L13.6186 15.2462L9.00006 12.8125Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							117
						</p>
						<p className="text-bold flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="19"
								viewBox="0 0 18 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 15.5C9.82843 15.5 10.5 14.8284 10.5 14C10.5 13.1716 9.82843 12.5 9 12.5C8.17157 12.5 7.5 13.1716 7.5 14C7.5 14.8284 8.17157 15.5 9 15.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5C6.07843 6.5 6.75 5.82843 6.75 5C6.75 4.17157 6.07843 3.5 5.25 3.5C4.42157 3.5 3.75 4.17157 3.75 5C3.75 5.82843 4.42157 6.5 5.25 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12.75 6.5C13.5784 6.5 14.25 5.82843 14.25 5C14.25 4.17157 13.5784 3.5 12.75 3.5C11.9216 3.5 11.25 4.17157 11.25 5C11.25 5.82843 11.9216 6.5 12.75 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5V8C5.25 8.39782 5.40804 8.77936 5.68934 9.06066C5.97064 9.34196 6.35218 9.5 6.75 9.5H11.25C11.6478 9.5 12.0294 9.34196 12.3107 9.06066C12.592 8.77936 12.75 8.39782 12.75 8V6.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9 9.5V12.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							18
						</p>
					</div>
					<Image src={github_bar} alt="" />
					<div className="flex items-center">
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
							<span className="text-bold mr-1.5 text-xs">TypeScript</span>
							<span className="text-bold text-xs text-gray-500">65.5%</span>
						</div>
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-yellow-300"></span>
							<span className="text-bold mr-1.5 text-xs">JavaScript</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
						<div className="flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-gray-500"></span>
							<span className="text-bold mr-1.5 text-xs">Other</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
					</div>
				</li>
				<li className="mb-10">
					<h3 className="mb-2 text-lg">lightsound/nexst-tailwind</h3>
					<p className="mb-2">Next.js starter template.</p>
					<div className="flex items-center">
						<p className="text-bold mr-5 flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00006 12.8125L4.37106 15.2462L5.25531 10.0915L1.50531 6.44121L6.68031 5.69121L8.99481 1.00146L11.3093 5.69121L16.4843 6.44121L12.7343 10.0915L13.6186 15.2462L9.00006 12.8125Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							117
						</p>
						<p className="text-bold flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="19"
								viewBox="0 0 18 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 15.5C9.82843 15.5 10.5 14.8284 10.5 14C10.5 13.1716 9.82843 12.5 9 12.5C8.17157 12.5 7.5 13.1716 7.5 14C7.5 14.8284 8.17157 15.5 9 15.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5C6.07843 6.5 6.75 5.82843 6.75 5C6.75 4.17157 6.07843 3.5 5.25 3.5C4.42157 3.5 3.75 4.17157 3.75 5C3.75 5.82843 4.42157 6.5 5.25 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12.75 6.5C13.5784 6.5 14.25 5.82843 14.25 5C14.25 4.17157 13.5784 3.5 12.75 3.5C11.9216 3.5 11.25 4.17157 11.25 5C11.25 5.82843 11.9216 6.5 12.75 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5V8C5.25 8.39782 5.40804 8.77936 5.68934 9.06066C5.97064 9.34196 6.35218 9.5 6.75 9.5H11.25C11.6478 9.5 12.0294 9.34196 12.3107 9.06066C12.592 8.77936 12.75 8.39782 12.75 8V6.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9 9.5V12.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							18
						</p>
					</div>
					<Image src={github_bar} alt="" />
					<div className="flex items-center">
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
							<span className="text-bold mr-1.5 text-xs">TypeScript</span>
							<span className="text-bold text-xs text-gray-500">65.5%</span>
						</div>
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-yellow-300"></span>
							<span className="text-bold mr-1.5 text-xs">JavaScript</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
						<div className="flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-gray-500"></span>
							<span className="text-bold mr-1.5 text-xs">Other</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
					</div>
				</li>
				<li className="mb-10">
					<h3 className="mb-2 text-lg">lightsound/nexst-tailwind</h3>
					<p className="mb-2">Next.js starter template.</p>
					<div className="flex items-center">
						<p className="text-bold mr-5 flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00006 12.8125L4.37106 15.2462L5.25531 10.0915L1.50531 6.44121L6.68031 5.69121L8.99481 1.00146L11.3093 5.69121L16.4843 6.44121L12.7343 10.0915L13.6186 15.2462L9.00006 12.8125Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							117
						</p>
						<p className="text-bold flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="19"
								viewBox="0 0 18 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 15.5C9.82843 15.5 10.5 14.8284 10.5 14C10.5 13.1716 9.82843 12.5 9 12.5C8.17157 12.5 7.5 13.1716 7.5 14C7.5 14.8284 8.17157 15.5 9 15.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5C6.07843 6.5 6.75 5.82843 6.75 5C6.75 4.17157 6.07843 3.5 5.25 3.5C4.42157 3.5 3.75 4.17157 3.75 5C3.75 5.82843 4.42157 6.5 5.25 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12.75 6.5C13.5784 6.5 14.25 5.82843 14.25 5C14.25 4.17157 13.5784 3.5 12.75 3.5C11.9216 3.5 11.25 4.17157 11.25 5C11.25 5.82843 11.9216 6.5 12.75 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5V8C5.25 8.39782 5.40804 8.77936 5.68934 9.06066C5.97064 9.34196 6.35218 9.5 6.75 9.5H11.25C11.6478 9.5 12.0294 9.34196 12.3107 9.06066C12.592 8.77936 12.75 8.39782 12.75 8V6.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9 9.5V12.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							18
						</p>
					</div>
					<Image src={github_bar} alt="" />
					<div className="flex items-center">
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
							<span className="text-bold mr-1.5 text-xs">TypeScript</span>
							<span className="text-bold text-xs text-gray-500">65.5%</span>
						</div>
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-yellow-300"></span>
							<span className="text-bold mr-1.5 text-xs">JavaScript</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
						<div className="flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-gray-500"></span>
							<span className="text-bold mr-1.5 text-xs">Other</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
					</div>
				</li>
				<li className="mb-10">
					<h3 className="mb-2 text-lg">lightsound/nexst-tailwind</h3>
					<p className="mb-2">Next.js starter template.</p>
					<div className="flex items-center">
						<p className="text-bold mr-5 flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00006 12.8125L4.37106 15.2462L5.25531 10.0915L1.50531 6.44121L6.68031 5.69121L8.99481 1.00146L11.3093 5.69121L16.4843 6.44121L12.7343 10.0915L13.6186 15.2462L9.00006 12.8125Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							117
						</p>
						<p className="text-bold flex items-center text-xs text-gray-400">
							<svg
								className="mr-1"
								width="18"
								height="19"
								viewBox="0 0 18 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 15.5C9.82843 15.5 10.5 14.8284 10.5 14C10.5 13.1716 9.82843 12.5 9 12.5C8.17157 12.5 7.5 13.1716 7.5 14C7.5 14.8284 8.17157 15.5 9 15.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5C6.07843 6.5 6.75 5.82843 6.75 5C6.75 4.17157 6.07843 3.5 5.25 3.5C4.42157 3.5 3.75 4.17157 3.75 5C3.75 5.82843 4.42157 6.5 5.25 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12.75 6.5C13.5784 6.5 14.25 5.82843 14.25 5C14.25 4.17157 13.5784 3.5 12.75 3.5C11.9216 3.5 11.25 4.17157 11.25 5C11.25 5.82843 11.9216 6.5 12.75 6.5Z"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.25 6.5V8C5.25 8.39782 5.40804 8.77936 5.68934 9.06066C5.97064 9.34196 6.35218 9.5 6.75 9.5H11.25C11.6478 9.5 12.0294 9.34196 12.3107 9.06066C12.592 8.77936 12.75 8.39782 12.75 8V6.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9 9.5V12.5"
									stroke="#909296"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							18
						</p>
					</div>
					<Image src={github_bar} alt="" />
					<div className="flex items-center">
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
							<span className="text-bold mr-1.5 text-xs">TypeScript</span>
							<span className="text-bold text-xs text-gray-500">65.5%</span>
						</div>
						<div className="mr-4 flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-yellow-300"></span>
							<span className="text-bold mr-1.5 text-xs">JavaScript</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
						<div className="flex items-center">
							<span className="mr-1.5 block h-1.5 w-1.5 rounded-full bg-gray-500"></span>
							<span className="text-bold mr-1.5 text-xs">Other</span>
							<span className="text-bold text-xs text-gray-500">33.7%</span>
						</div>
					</div>
				</li>
			</ul>
			<div className="text-center">
				<Button>View on GitHub</Button>
			</div>
		</section>
	);
};
