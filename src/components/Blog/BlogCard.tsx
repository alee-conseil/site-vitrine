import { BlogBody, User } from "@/utils/interfaces";
import { Jost, Montserrat } from "next/font/google";
import Link from "next/link";

const jostFont = Jost({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });

type Props = {
    id: string,
    title: string,
    body: BlogBody[],
    author: User
}

export default function BlogCard({ id, title, body, author }: Props) {
    const firstParagraph = body.find((section) => section.type === "paragraph" || section.type === "header1" || section.type === "header2");
    return (
        <Link href={"/blogs/" + id} className="w-full flex flex-col justify-between items-start py-5 px-6 border-2 gap-4 cursor-pointer transition duration-300 border-purple-600 group text-black hover:text-white hover:bg-purple-600">
            <div className="w-full flex flex-col justify-start items-start gap-4">
                <h1 className={jostFont.className + " font-bold text-2xl text-left line-clamp-2 md:h-16"}>
                    {title}
                </h1>
                <h2 className={montserratFont.className + " font-normal text-sm text-left line-clamp-6"}>
                    {firstParagraph ? firstParagraph.text : ""}
                </h2>
            </div>
            <p className={montserratFont.className + " w-full text-[#5C8BFC] group-hover:text-black underline text-left font-semibold text-violet-70"}>
                Lire plus
            </p>
        </Link>
    )
}