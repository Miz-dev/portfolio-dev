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
				<div className="flex items-center">
					<Link href="/">
						<a className="text-4 mx-2 text-white">
							<svg
								width="21"
								height="18"
								viewBox="0 0 21 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20.31 0.80501C19.4833 1.31365 18.5755 1.67658 17.626 1.87801C17.2272 1.44258 16.742 1.09512 16.2013 0.857847C15.6607 0.620572 15.0764 0.498697 14.486 0.500011C13.3479 0.50001 12.2565 0.951895 11.4515 1.75634C10.6464 2.56079 10.1938 3.65196 10.193 4.79001C10.193 5.13001 10.23 5.45901 10.27 5.78701C8.56637 5.69175 6.90167 5.24016 5.38345 4.46142C3.86524 3.68267 2.52727 2.59409 1.456 1.26601C1.08682 1.92182 0.876846 2.65519 0.843 3.40701C0.876 4.92101 1.633 6.23701 2.759 7.00101C2.08671 6.97883 1.43001 6.79277 0.846 6.45901C0.841016 6.48343 0.841016 6.5086 0.846 6.53301C0.841 8.58801 2.322 10.323 4.292 10.743C3.922 10.816 3.546 10.865 3.142 10.89C2.876 10.865 2.607 10.84 2.375 10.816C2.892 12.502 4.476 13.733 6.363 13.806C4.81774 14.9778 2.93622 15.6209 0.997 15.64L0 15.58C1.969 16.8345 4.25531 17.5006 6.59 17.5C14.476 17.5 18.793 10.953 18.775 5.31601C18.7904 5.11097 18.7904 4.90505 18.775 4.70001C19.6278 4.10332 20.3569 3.34705 20.922 2.47301C20.1495 2.83899 19.3209 3.07226 18.471 3.16301C19.3627 2.63266 20.0197 1.78338 20.309 0.787011"
									fill="white"
								/>
							</svg>
						</a>
					</Link>
					<Link href="/">
						<a className="text-4 mx-2 text-white">
							<svg
								width="18"
								height="19"
								viewBox="0 0 18 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18 9.1461C18 4.1501 13.97 0.100098 9.00001 0.100098C4.03001 0.100098 9.31527e-06 4.1501 9.31527e-06 9.1461C-0.00307406 11.2933 0.759387 13.3712 2.15048 15.0068C3.54158 16.6424 5.47019 17.7285 7.59001 18.0701V11.6941H5.39501V9.1401H7.58801V7.2601C7.58801 5.0741 8.91601 3.8851 10.855 3.8851C11.785 3.8851 12.583 3.9551 12.815 3.9851V6.2701H11.47C10.415 6.2701 10.21 6.7731 10.21 7.5121V9.1421H12.727L12.397 11.6961H10.21V18.1001C14.608 17.5031 18 13.7271 18 9.1461Z"
									fill="white"
								/>
							</svg>
						</a>
					</Link>
					<Link href="/">
						<a className="text-4 mx-2 text-white">
							<svg
								width="25"
								height="26"
								viewBox="0 0 25 26"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.41101 19.5935C8.41101 20.9138 7.34575 21.9845 6.0306 21.9845C4.71662 21.9845 3.65082 20.9138 3.65082 19.5935C3.65082 18.2714 4.71662 17.2009 6.0306 17.2009C7.34575 17.2009 8.41101 18.2713 8.41101 19.5935Z"
									fill="white"
								/>
								<path
									d="M3.5 12.9577C3.5 13.2886 3.75769 13.5606 4.08654 13.5774C6.43948 13.698 8.02196 14.5586 9.47946 16.0305C10.9117 17.4755 11.8228 19.5489 11.9792 21.4308C12.006 21.7523 12.2733 22.0001 12.5944 22.0001H14.8063C14.9757 22.0001 15.1378 21.9301 15.2544 21.8066C15.3711 21.6831 15.4321 21.5169 15.4234 21.3469C15.1085 15.1476 10.3261 10.4368 4.1493 10.1272C3.98024 10.1187 3.81523 10.1804 3.69255 10.2975C3.5699 10.4147 3.5 10.5773 3.5 10.7474V12.9577Z"
									fill="white"
								/>
								<path
									d="M3.5 6.83396C3.5 7.16754 3.76187 7.44083 4.09356 7.45404C11.6695 7.75519 17.759 13.7962 18.0626 21.4038C18.0759 21.7366 18.3482 21.9999 18.6797 21.9999H20.882C21.0496 21.9999 21.21 21.9315 21.3264 21.8104C21.4429 21.6893 21.5053 21.5259 21.4997 21.3576C21.1781 11.7729 13.6823 4.31977 4.13897 4.00034C3.97158 3.99474 3.80915 4.05765 3.68873 4.17466C3.5683 4.29159 3.5 4.45269 3.5 4.62097V6.83396Z"
									fill="white"
								/>
							</svg>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};
