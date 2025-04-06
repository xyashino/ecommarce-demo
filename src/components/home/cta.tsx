import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cta() {
	return (
		<section className="flex my-10 flex-col gap-5 py-5 text-center bg-gradient-to-r from-blue-500 to-violet-700 text-white rounded">
			<h2 className="text-3xl font-bold capitalize max-w-sm mx-auto">
				Gotowy, by zobaczyć, jak to działa?{" "}
			</h2>
			<Button asChild size="lg" variant="default" className="w-fit mx-auto">
				<Link href="/demo">Sprawdź demo</Link>
			</Button>
		</section>
	);
}
