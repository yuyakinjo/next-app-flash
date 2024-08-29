"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// flashが表示されるページ へ リダイレクト
export const flashTestAction = (formData: FormData) => {
	const name = formData.get("name")?.toString();

	if (name === "success") {
		cookies().set("flash", "success", { maxAge: 1 }); // 一度だけ表示されるメッセージを設定
	} else {
		cookies().set("flash", "failed", { maxAge: 1 }); // 一度だけ表示されるメッセージを設定
	}

	redirect("/flash");
};
