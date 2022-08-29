import React from "react";

export const Title = (props: any) => {
	const { children } = props;
	return (
		<h2 className="mb-6 border-b-2 border-gray-200 pb-5 text-[26px] font-bold">
			{children}
		</h2>
	);
};
