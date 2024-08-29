import Link from "next/link";

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>hello from home</h1>
			<div className="flex flex-row gap-x-14">
				<Link href="/form">form ページへ</Link>
				<Link href="/flash" prefetch={false}>
					flash ページへ
				</Link>
				{/* <a href="/flash">flash ページへ</a> */}
			</div>
		</main>
	);
}
