import localFont from "next/font/local";
import CalendarIcon from "@/components/icons/CalendarIcon";

// Import custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`p-6 bg-green-200 ${geistSans.variable} ${geistMono.variable}`}>
      <h1 className="text-3xl font-semibold tracking-widest">Card</h1>

      <div className="bg-white rounded-xl py-5 w-[327px] shadow-lg">
        <div className="flex justify-between px-6 pb-4">
          <h3 className="text-[#0D38CE] font-semibold text-sm">Хакатон</h3>

          <div className="rounded-full bg-[#E4EAFF] w-6 h-6 flex items-center justify-center">
            <CalendarIcon />
          </div>
        </div>

        <div className="h-px bg-[#B8C8FF] w-full" />

        <div className="px-6 text-[#00000099]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-[#000000] font-bold text-lg">More Tech</h3>
              <p>20 октября 2021</p>
            </div>
            <button className="text-[#0D38CE] font-bold rounded-full border border-[#0D38CE] px-4 py-1">
              Сайт
            </button>
          </div>

          <ul className="text-[#0D38CE] font-bold flex justify-between gap-3 mb-4">
            <li className="bg-[#E4EAFF] px-3 py-1 rounded-full">Дизайн</li>
            <li className="bg-[#E4EAFF] px-3 py-1 rounded-full">Data Science</li>
            <li className="bg-[#E4EAFF] px-3 py-1 rounded-full">AR</li>
          </ul>

          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet
            feugiat ut integer tincidunt sed. Fusce vulputate sed commodo, sed
            lorem. Mi semper orci, semper vestibulum.
          </p>

          <ul className="flex justify-between gap-3">
            <li className="text-[#0D38CE] font-bold ">Есть отбор</li>
            <li className="text-[#0D38CE] font-bold">Регистрация до 21.09</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
