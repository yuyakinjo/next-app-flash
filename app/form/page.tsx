import { flashTestAction } from "../action";

// action を動作させるために form を作成
export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>hello from form</h1>
			<form action={flashTestAction}>
				<div className="flex flex-col gap-5">
					<input type="text" name="name" className="text-black" />
					<button type="submit">送信</button>
				</div>
			</form>
		</main>
	);
}
