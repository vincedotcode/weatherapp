import Image from 'next/image';

type HeroProps = {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
};

export default function Hero({ title, subtitle, description, imageUrl }: HeroProps) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-12 md:px-24 bg-slate-200">
            {/* Text section on the left */}
            <div className="flex-1 space-y-4 max-w-lg">
                <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
                <h2 className="text-2xl text-gray-700">{subtitle}</h2>
                <p className="text-gray-600 text-base">{description}</p>
            </div>

            {/* Image section on the right */}
            <div className="flex-1 flex justify-end mt-8 md:mt-0">
                <Image
                    src={imageUrl}
                    alt="Weather visual"
                    className="rounded-lg shadow-lg"
                    width={500}
                    height={300}
                    objectFit="cover" 
                />
            </div>
        </div>
    );
}
