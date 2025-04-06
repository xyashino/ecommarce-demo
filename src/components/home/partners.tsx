import Image from "next/image";

const clients = [
	{
		id: 1,
		name: "Microsoft",
		logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
		alt: "Microsoft logo",
		},
		{
			id: 2,
			name: "Google",
			logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
			alt: "Google logo",
		},
		{
			id: 4,
			name: "Amazon",
			logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
			alt: "Amazon logo",
		},
		{
			id: 5,
			name: "Meta",
		logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
		alt: "Meta logo",
	},
];

export function Partners() {
	return (
		<section className="flex w-full justify-around items-center gap-10 p-10 rounded">
			{clients.map((client) => (
				<Image
					key={client.id}
					src={client.logo}
					alt={client.alt}
					className="h-12 w-auto"
					draggable={false}
					width={100}
					height={100}
				/>
			))}
		</section>
	);
}
