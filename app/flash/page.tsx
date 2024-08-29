import { cookies } from "next/headers";
import Link from "next/link";

// flashが表示されるページ
export default function Page() {
	const flash = cookies().get("flash");
	// cookies().has("flash") && cookies().set("flash", ""); //Error: Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{flash?.value && <span className="text-green-500">{flash.value}</span>}

			<h1>hello from flash</h1>
			<div className="flex flex-row gap-x-14">
				<Link href="/">homeへ</Link>
			</div>
		</main>
	);
}
