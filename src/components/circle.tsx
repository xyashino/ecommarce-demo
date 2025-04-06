import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

type Position = Partial<{
	top: string;
	left: string;
	right: string;
	bottom: string;
}>;

const circleVariants = cva(
	"rounded-full blur-3xl absolute transition-opacity duration-300 z-[-1]",
	{
		variants: {
			size: {
				sm: "w-[24rem] h-[24rem]",
				md: "w-[32rem] h-[32rem]",
				lg: "w-[40rem] h-[40rem]",
			},
			variant: {
				purple: "bg-gradient-to-r from-purple-600 to-pink-600 opacity-30",
				blue: "bg-gradient-to-r from-blue-600 to-violet-600 opacity-30",
				cyan: "bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-25",
				warm: "bg-gradient-to-r from-orange-500 to-rose-500 opacity-25",
			},
			center: {
				true: "translate-x-1/2 -translate-y-1/2",
			},
		},
		defaultVariants: {
			size: "md",
			variant: "blue",
			center: false,
		},
	},
);

type CircleProps = {
	className?: string;
	position?: Position;
} & VariantProps<typeof circleVariants>;

export function Circle({ className, position, ...variants }: CircleProps) {
	return (
		<div
			className={cn(circleVariants(variants), className)}
			style={position ? { ...position } : undefined}
		/>
	);
}
