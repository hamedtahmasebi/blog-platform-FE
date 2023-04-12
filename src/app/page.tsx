import { Poppins } from "next/font/google";
import { Header } from "@src/components/Home/template/Header";

const poppins = Poppins({
    weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <div className={`${poppins.className}`}>
                <header>
                    <Header />
                </header>
                <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>;
            </div>
        </>
    );
}
