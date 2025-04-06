import { IconInnerShadowTop } from "@tabler/icons-react";
import Link from "next/link";

type LogoLinkProps = {
	href?: string;
};

export function LogoLink({ href = "/" }: LogoLinkProps) {
	return (
		<Link
			href={href}
			className="flex items-center gap-2 select-none group/logo"
			draggable={false}
		>
			<IconInnerShadowTop className="size-6 group-hover/logo:rotate-180 transition-transform duration-300" />
			<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-violet-600">
				EcomPanel
			</h1>
		</Link>
	);
}
